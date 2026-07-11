import { getDb } from "@/lib/db";

const BANDS = new Set(["low", "mid", "high"]);
const QUESTION_IDS = new Set([
  "smoke",
  "alcohol",
  "move",
  "diet",
  "family",
  "screen",
]);

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { score, band, answers, lang } = (body ?? {}) as {
    score?: unknown;
    band?: unknown;
    answers?: unknown;
    lang?: unknown;
  };

  if (
    typeof score !== "number" ||
    !Number.isInteger(score) ||
    score < 0 ||
    score > 12 ||
    typeof band !== "string" ||
    !BANDS.has(band) ||
    (lang !== "vi" && lang !== "en") ||
    typeof answers !== "object" ||
    answers === null ||
    !Object.entries(answers).every(
      ([k, v]) =>
        QUESTION_IDS.has(k) && typeof v === "number" && Number.isInteger(v) && v >= 0 && v <= 2
    )
  ) {
    return Response.json({ error: "Invalid payload" }, { status: 400 });
  }

  try {
    const sql = getDb();
    await sql`
      INSERT INTO risk_checks (score, band, answers, lang)
      VALUES (${score}, ${band}, ${JSON.stringify(answers)}, ${lang})
    `;
    return Response.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("risk-check insert failed:", err);
    return Response.json({ error: "Database error" }, { status: 500 });
  }
}
