import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LLMService } from 'src/llmService/llm.service';
import { OCRService } from 'src/ocrService/ocr.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { S3Service } from 'src/s3/s3.service';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';

@Module({
  controllers: [ContractController],
  providers: [
    ContractService,
    PrismaService,
    S3Service,
    ConfigService,
    LLMService,
    OCRService,
  ],
})
export class ContractModule {}
