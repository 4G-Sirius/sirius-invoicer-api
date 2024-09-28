/*
  Warnings:

  - Added the required column `PONumber` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `additionalInfo` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `balance_due` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bankDetails` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyPromoInfoEmail` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyPromoInfoPhone` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyPromoInfoWebPage` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contractId` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currencySymbol` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discount` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `docId` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dueDate` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromEmail` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromName` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isExpense` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `issueDate` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `languageCode` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paidAmount` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paidDate` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `services` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtotal` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tax` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toAddress` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toEmail` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toName` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toPhone` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlHash` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Contract` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contract" ADD COLUMN     "PONumber" TEXT NOT NULL,
ADD COLUMN     "additionalInfo" TEXT NOT NULL,
ADD COLUMN     "balance_due" INTEGER NOT NULL,
ADD COLUMN     "bankDetails" TEXT NOT NULL,
ADD COLUMN     "companyPromoInfoEmail" TEXT NOT NULL,
ADD COLUMN     "companyPromoInfoPhone" TEXT NOT NULL,
ADD COLUMN     "companyPromoInfoWebPage" TEXT NOT NULL,
ADD COLUMN     "contractId" INTEGER NOT NULL,
ADD COLUMN     "currencySymbol" TEXT NOT NULL,
ADD COLUMN     "discount" INTEGER NOT NULL,
ADD COLUMN     "docId" TEXT NOT NULL,
ADD COLUMN     "dueDate" TEXT NOT NULL,
ADD COLUMN     "fromEmail" TEXT NOT NULL,
ADD COLUMN     "fromName" TEXT NOT NULL,
ADD COLUMN     "isExpense" BOOLEAN NOT NULL,
ADD COLUMN     "issueDate" TEXT NOT NULL,
ADD COLUMN     "languageCode" TEXT NOT NULL,
ADD COLUMN     "logo" TEXT NOT NULL,
ADD COLUMN     "paidAmount" INTEGER NOT NULL,
ADD COLUMN     "paidDate" TEXT NOT NULL,
ADD COLUMN     "services" TEXT NOT NULL,
ADD COLUMN     "subtotal" INTEGER NOT NULL,
ADD COLUMN     "tax" INTEGER NOT NULL,
ADD COLUMN     "toAddress" TEXT NOT NULL,
ADD COLUMN     "toEmail" TEXT NOT NULL,
ADD COLUMN     "toName" TEXT NOT NULL,
ADD COLUMN     "toPhone" TEXT NOT NULL,
ADD COLUMN     "total" INTEGER NOT NULL,
ADD COLUMN     "urlHash" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;
