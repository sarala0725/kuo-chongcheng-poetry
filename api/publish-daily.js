const textDecoder = new TextDecoder();

function required(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function githubHeaders() {
  return {
    Authorization: `Bearer ${required("GITHUB_TOKEN")}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
  };
}

function encodeUtf8(value) {
  return Buffer.from(value, "utf8").toString("base64");
}

async function getGitHubFile(path) {
  const repo = required("GITHUB_REPOSITORY");
  const branch = process.env.GITHUB_BRANCH || "main";
  const response = await fetch(`https://api.github.com/repos/${repo}/contents/${path}?ref=${branch}`, { headers: githubHeaders() });
  if (!response.ok) throw new Error(`GitHub could not read ${path}: ${response.status}`);
  const file = await response.json();
  const bytes = Buffer.from(file.content.replace(/\n/g, ""), "base64");
  return { sha: file.sha, value: JSON.parse(textDecoder.decode(bytes)) };
}

async function putGitHubFile(path, contentBase64, message, sha) {
  const repo = required("GITHUB_REPOSITORY");
  const branch = process.env.GITHUB_BRANCH || "main";
  const response = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
    method: "PUT",
    headers: { ...githubHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify({ message, content: contentBase64, branch, ...(sha ? { sha } : {}) })
  });
  if (!response.ok) throw new Error(`GitHub could not write ${path}: ${response.status} ${await response.text()}`);
  return response.json();
}

async function createInkImage(prompt) {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: { Authorization: `Bearer ${required("OPENAI_API_KEY")}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-image-1.5",
      prompt: `Use case: illustration-story\nAsset type: literary collection article header\nPrimary request: ${prompt}\nStyle/medium: refined East Asian ink-wash painting on warm rice paper\nComposition/framing: quiet horizontal landscape, generous empty space, no people unless the source text requires it\nConstraints: no text, no calligraphy, no watermark, no signature, no frame`,
      size: "1536x1024",
      quality: "medium",
      output_format: "webp"
    })
  });
  if (!response.ok) throw new Error(`OpenAI image generation failed: ${response.status} ${await response.text()}`);
  const payload = await response.json();
  const image = payload.data?.[0]?.b64_json;
  if (!image) throw new Error("OpenAI did not return an image payload.");
  return image;
}

function dateInTaipei() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Taipei", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}

export default async function handler(request, response) {
  try {
    const expected = required("PUBLISH_CRON_SECRET");
    if (request.headers.authorization !== `Bearer ${expected}`) return response.status(401).json({ error: "Unauthorized" });

    const today = dateInTaipei();
    const registry = await getGitHubFile("content/approved-posts.json");
    const post = registry.value.posts.find((item) => item.status === "approved" && item.scheduled_date <= today && !item.published_at);
    if (!post) return response.status(200).json({ published: false, message: "No approved post is due." });

    const imageBase64 = await createInkImage(post.image_prompt);
    const imagePath = `public/images/daily/${post.slug}.webp`;
    await putGitHubFile(imagePath, imageBase64, `Publish image: ${post.title}`);

    const publishedPost = { ...post, image: `/images/daily/${post.slug}.webp`, published_at: new Date().toISOString(), status: "published" };
    await putGitHubFile(`content/posts/${post.slug}.json`, encodeUtf8(JSON.stringify(publishedPost, null, 2) + "\n"), `Publish: ${post.title}`);

    registry.value.posts = registry.value.posts.map((item) => item.slug === post.slug ? publishedPost : item);
    await putGitHubFile("content/approved-posts.json", encodeUtf8(JSON.stringify(registry.value, null, 2) + "\n"), `Mark published: ${post.title}`, registry.sha);
    return response.status(200).json({ published: true, slug: post.slug });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: error instanceof Error ? error.message : "Unknown publishing error" });
  }
}
