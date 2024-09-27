import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContractModule } from './contract/contract.module';
import { InvoiceModule } from './invoice/invoice.module';
import { PrismaService } from './prisma/prisma.service';
import { S3Service } from './s3/s3.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, ContractModule, InvoiceModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, S3Service],
})
export class AppModule {}
