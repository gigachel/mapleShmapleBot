-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tg_id" TEXT NOT NULL,
    "name" TEXT,
    "first_name" TEXT,
    "last_name" TEXT
);
INSERT INTO "new_User" ("first_name", "id", "last_name", "name", "tg_id") SELECT "first_name", "id", "last_name", "name", "tg_id" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_tg_id_key" ON "User"("tg_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
