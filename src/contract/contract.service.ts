// eslint-disable-next-line @typescript-eslint/no-var-requires
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LLMService } from 'src/llmService/llm.service';

import { OCRService } from 'src/ocrService/ocr.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { S3Service } from 'src/s3/s3.service';
import { SiriusContract } from './entities/contract.entity';

@Injectable()
export class ContractService {
  constructor(
    private prismaService: PrismaService,
    private s3Service: S3Service,
    private configService: ConfigService,
    private ocrService: OCRService,
    private llmService: LLMService,
  ) {}

  async create(files: Express.Multer.File[]) {
    const file = files[0];
    if (!file) {
      throw new Error('No files uploaded');
    }

    const uploadedContract = await this.s3Service.uploadFile(
      file,
      this.configService.getOrThrow('AWS_BUCKET'),
    );

    const ocrResponse = await this.ocrService.extractText({
      image: `https://sirius-invoicer-bucket.s3.eu-west-2.amazonaws.com/${uploadedContract.file}`,
    });
    const llmResponse: SiriusContract = await this.llmService.extractData(
      JSON.stringify(ocrResponse),
    );

    console.log(llmResponse);

    // const job = await this.prismaService.contract.create({
    //   data: { ...llmResponse, url: uploadedContract.file },
    // });

    return ocrResponse;
  }

  findAll() {
    return this.prismaService.contract.findMany();
  }

  findOne(id: string) {
    return this.prismaService.contract.findUnique({ where: { id } });
  }

  remove(id: string) {
    return this.prismaService.contract.delete({ where: { id } });
  }
}
