// eslint-disable-next-line @typescript-eslint/no-var-requires
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LLMService } from 'src/llmService/llm.service';
import { OCRService } from 'src/ocrService/ocr.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { S3Service } from 'src/s3/s3.service';

const pdf = require('pdf-parse');
@Injectable()
export class ContractService {
  constructor(
    private prismaService: PrismaService,
    private s3Service: S3Service,
    private configService: ConfigService,
    private ocrService: OCRService,
    private llmService: LLMService,
  ) {}

  async create(files: Express.Multer.File[], promptText: string) {
    const file = files[0];
    if (!file) {
      throw new Error('No files uploaded');
    }

    const response = await this.s3Service.uploadFile(
      file,
      this.configService.getOrThrow('AWS_BUCKET'),
    );

    const ocrResponse = await this.ocrService.extractText({
      image: `https://sirius-invoicer-bucket.s3.eu-west-2.amazonaws.com/${response.file}`,
    });

    const llmResponse = await this.llmService.extractData(
      ocrResponse,
      promptText,
    );
    return llmResponse;
  }

  async createPdf(
    files: Express.Multer.File[],
    promptText: string,
    phone: string,
  ) {
    const file = files[0];
    if (!file) {
      throw new Error('No files uploaded');
    }

    const text = await pdf(file.buffer);

    const llmResponse = await this.llmService.extractData(
      text.text,
      promptText,
    );
    const data = await this.prismaService.invoice.create({
      data: {
        provider: { create: { ...llmResponse.provider } },
        beneficiary: { create: { ...llmResponse.beneficiary } },
        dates: { create: { ...llmResponse.dates } },
        payments: { create: { ...llmResponse.payments } },
        service: {
          create: {
            ...llmResponse.service,
          },
        },
      },
    });
    const datattt = await this.prismaService.invoice.findFirst({
      where: { id: data.id },
      include: {
        provider: true,
        beneficiary: true,
        dates: true,
        payments: true,
        service: true,
      },
    });
    return datattt;
  }

  findAll(phone: string) {
    return this.prismaService.invoice.findMany({
      where: { user: { phone } },
      include: {
        provider: true,
        beneficiary: true,
        dates: true,
        payments: true,
        service: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.invoice.findUnique({
      where: { id },
      include: {
        provider: true,
        beneficiary: true,
        dates: true,
        service: true,
        payments: true,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.invoice.delete({ where: { id } });
  }
}
