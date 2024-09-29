import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContractModule } from './contract/contract.module';
import { PrismaService } from './prisma/prisma.service';
import { S3Service } from './s3/s3.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, ContractModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, S3Service, ConfigService],
})
export class AppModule {}
