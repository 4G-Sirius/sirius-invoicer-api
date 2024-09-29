/*
  Warnings:

  - The primary key for the `Date` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Date` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Invoice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Invoice` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `InvoiceParty` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `InvoiceParty` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `PaymentDetail` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `PaymentDetail` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `dateId` on the `Invoice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `invoiceId` on the `InvoiceParty` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `paymentDetailId` on the `InvoiceParty` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_dateId_fkey";

-- DropForeignKey
ALTER TABLE "InvoiceParty" DROP CONSTRAINT "InvoiceParty_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "InvoiceParty" DROP CONSTRAINT "InvoiceParty_paymentDetailId_fkey";

-- AlterTable
ALTER TABLE "Date" DROP CONSTRAINT "Date_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Date_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Viewed',
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "dateId",
ADD COLUMN     "dateId" INTEGER NOT NULL,
ADD CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "InvoiceParty" DROP CONSTRAINT "InvoiceParty_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "invoiceId",
ADD COLUMN     "invoiceId" INTEGER NOT NULL,
DROP COLUMN "paymentDetailId",
ADD COLUMN     "paymentDetailId" INTEGER NOT NULL,
ADD CONSTRAINT "InvoiceParty_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PaymentDetail" DROP CONSTRAINT "PaymentDetail_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "PaymentDetail_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "InvoiceParty" ADD CONSTRAINT "InvoiceParty_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceParty" ADD CONSTRAINT "InvoiceParty_paymentDetailId_fkey" FOREIGN KEY ("paymentDetailId") REFERENCES "PaymentDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_dateId_fkey" FOREIGN KEY ("dateId") REFERENCES "Date"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
