/*
  Warnings:

  - Made the column `address` on table `Technician` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `Technician` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Technician" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL
);
INSERT INTO "new_Technician" ("address", "createdAt", "email", "id", "name", "phoneNumber") SELECT "address", "createdAt", "email", "id", "name", "phoneNumber" FROM "Technician";
DROP TABLE "Technician";
ALTER TABLE "new_Technician" RENAME TO "Technician";
CREATE UNIQUE INDEX "Technician_email_key" ON "Technician"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
