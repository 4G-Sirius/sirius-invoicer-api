/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the `InvoiceParty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PaymentDetail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `beneficiaryId` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentId` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providerId` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "InvoiceParty" DROP CONSTRAINT "InvoiceParty_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "InvoiceParty" DROP CONSTRAINT "InvoiceParty_paymentDetailId_fkey";

-- AlterTable
ALTER TABLE "Date" ALTER COLUMN "issueDate" SET DATA TYPE TEXT,
ALTER COLUMN "dueDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "createdAt",
DROP COLUMN "status",
ADD COLUMN     "beneficiaryId" INTEGER NOT NULL,
ADD COLUMN     "paymentId" INTEGER NOT NULL,
ADD COLUMN     "providerId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "InvoiceParty";

-- DropTable
DROP TABLE "PaymentDetail";

-- CreateTable
CREATE TABLE "Provider" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "administrator" TEXT NOT NULL,
    "iban" TEXT NOT NULL,
    "idno" TEXT NOT NULL,
    "bic" TEXT NOT NULL,

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Beneficiary" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "administrator" TEXT NOT NULL,
    "iban" TEXT NOT NULL,
    "idno" TEXT NOT NULL,
    "bic" TEXT NOT NULL,

    CONSTRAINT "Beneficiary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "total" INTEGER NOT NULL,
    "subtotal" INTEGER NOT NULL,
    "tax" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "Beneficiary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
