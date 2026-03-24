require("dotenv").config();
const { execSync } = require("child_process");

const direct =
  process.env.DIRECT_URL ||
  (process.env.DATABASE_URL || "").replace(/-pooler\./, ".");

if (!direct.startsWith("postgresql://")) {
  console.error("В .env нужен DIRECT_URL или DATABASE_URL (прямой URL Neon).");
  process.exit(1);
}

console.log("Используется прямой URL (хост без -pooler). Запуск prisma db push...\n");
execSync("npx prisma db push", {
  stdio: "inherit",
  env: { ...process.env, DIRECT_URL: direct, DATABASE_URL: direct },
});
