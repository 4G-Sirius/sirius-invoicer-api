/*
  Warnings:

  - You are about to drop the column `beneficiaryId` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `providerId` on the `Invoice` table. All the data in the column will be lost.
  - Added the required column `invoicePartyId` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "beneficiaryId",
DROP COLUMN "providerId",
ADD COLUMN     "invoicePartyId" INTEGER NOT NULL;
