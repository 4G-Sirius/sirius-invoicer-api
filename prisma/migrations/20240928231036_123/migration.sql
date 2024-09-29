/*
  Warnings:

  - You are about to drop the column `invoicePartyId` on the `Invoice` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "invoicePartyId";
