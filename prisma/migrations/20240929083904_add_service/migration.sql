-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "serviceId" INTEGER;

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "quantity" INTEGER,
    "um" TEXT,
    "tva" INTEGER,
    "price" INTEGER,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;
