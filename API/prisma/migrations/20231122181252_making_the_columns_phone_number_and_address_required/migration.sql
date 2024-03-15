/*
  Warnings:

  - Made the column `address` on table `Professor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `Professor` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Professor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL
);
INSERT INTO "new_Professor" ("address", "createdAt", "email", "id", "name", "phoneNumber") SELECT "address", "createdAt", "email", "id", "name", "phoneNumber" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
