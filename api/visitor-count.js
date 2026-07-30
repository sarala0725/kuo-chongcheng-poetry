const COUNTER_URL = "https://api.counterapi.dev/v1/kuo-chongcheng-poetry/visitors";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const shouldIncrement = request.query?.action === "up";
  const endpoint = shouldIncrement ? `${COUNTER_URL}/up` : COUNTER_URL;

  try {
    const upstream = await fetch(endpoint, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    if (!upstream.ok) throw new Error(`Counter service returned ${upstream.status}`);
    const data = await upstream.json();
    const count = Number(data.count ?? data.value ?? data);
    if (!Number.isFinite(count)) throw new Error("Counter response did not include a number");

    response.setHeader("Cache-Control", "no-store, max-age=0");
    return response.status(200).json({ count });
  } catch (error) {
    console.error(error);
    response.setHeader("Cache-Control", "no-store, max-age=0");
    return response.status(502).json({ error: "Visitor count is temporarily unavailable" });
  }
}
