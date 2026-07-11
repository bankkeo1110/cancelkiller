// One-time database setup. Run: node --env-file=.env.local scripts/setup-db.mjs
import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is not set");
  process.exit(1);
}

const sql = neon(url);

await sql`
  CREATE TABLE IF NOT EXISTS risk_checks (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    score smallint NOT NULL CHECK (score BETWEEN 0 AND 12),
    band text NOT NULL CHECK (band IN ('low', 'mid', 'high')),
    answers jsonb NOT NULL,
    lang text NOT NULL CHECK (lang IN ('vi', 'en')),
    created_at timestamptz NOT NULL DEFAULT now()
  )
`;
await sql`
  CREATE INDEX IF NOT EXISTS risk_checks_created_at_idx
  ON risk_checks (created_at)
`;

const [{ count }] = await sql`SELECT count(*)::int AS count FROM risk_checks`;
console.log(`risk_checks table ready (${count} rows).`);
