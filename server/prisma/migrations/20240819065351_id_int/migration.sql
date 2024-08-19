/*
  Warnings:

  - You are about to alter the column `tg_id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tg_id" INTEGER NOT NULL,
    "name" TEXT,
    "first_name" TEXT,
    "last_name" TEXT
);
INSERT INTO "new_User" ("first_name", "id", "last_name", "name", "tg_id") SELECT "first_name", "id", "last_name", "name", "tg_id" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
