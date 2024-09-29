/*
  Warnings:

  - You are about to drop the `Contract` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `beneficiaryId` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateId` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providerId` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "beneficiaryId" TEXT NOT NULL,
ADD COLUMN     "dateId" TEXT NOT NULL,
ADD COLUMN     "providerId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Contract";

-- CreateTable
CREATE TABLE "PaymentDetail" (
    "id" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "subtotal" INTEGER NOT NULL,
    "tax" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,

    CONSTRAINT "PaymentDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvoiceParty" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "administrator" TEXT NOT NULL,
    "iban" TEXT NOT NULL,
    "idno" TEXT NOT NULL,
    "bic" TEXT NOT NULL,
    "invoiceId" TEXT NOT NULL,
    "paymentDetailId" TEXT NOT NULL,

    CONSTRAINT "InvoiceParty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Date" (
    "id" TEXT NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Date_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InvoiceParty" ADD CONSTRAINT "InvoiceParty_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceParty" ADD CONSTRAINT "InvoiceParty_paymentDetailId_fkey" FOREIGN KEY ("paymentDetailId") REFERENCES "PaymentDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_dateId_fkey" FOREIGN KEY ("dateId") REFERENCES "Date"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
