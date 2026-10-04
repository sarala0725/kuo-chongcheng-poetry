export default async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store, max-age=0");
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const workspace = process.env.COUNTERAPI_WORKSPACE;
  const token = process.env.COUNTERAPI_TOKEN;
  const name = process.env.COUNTERAPI_COUNTER || "visitors";
  const shouldIncrement = request.query?.action === "up";
  const useV2 = Boolean(workspace && token);
  const endpoint = useV2
    ? `https://api.counterapi.dev/v2/${encodeURIComponent(workspace)}/${encodeURIComponent(name)}${shouldIncrement ? "/up" : ""}`
    : `https://api.counterapi.dev/v1/kuo-chongcheng-poetry/visitors${shouldIncrement ? "/up" : ""}`;

  try {
    const upstream = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
        ...(useV2 ? { Authorization: `Bearer ${token}` } : {}),
      },
      cache: "no-store",
    });
    if (!upstream.ok) throw new Error(`Counter service returned ${upstream.status}`);
    const data = await upstream.json();
    const rawCount = data.value ?? data.data?.value ?? data.count ?? data.data?.count;
    const count = Number(rawCount);
    if (rawCount == null || !Number.isSafeInteger(count) || count < 0) {
      throw new Error("Counter response did not include a valid count");
    }

    return response.status(200).json({ count });
  } catch (error) {
    console.error(error);
    return response.status(502).json({ error: "Visitor count is temporarily unavailable" });
  }
}
