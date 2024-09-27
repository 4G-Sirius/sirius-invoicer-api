import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { S3Service } from 'src/s3/s3.service';

@Injectable()
export class ContractService {
  constructor(
    private prismaService: PrismaService,
    private s3Service: S3Service,
    private configService: ConfigService,
  ) {}

  async create(files: Express.Multer.File[]) {
    if (files.length !== 0) {
      throw new Error('No files uploaded');
    }

    const uploadedContract = await this.s3Service.uploadFile(
      files[0],
      this.configService.getOrThrow('AWS_IMAGES_BUCKET'),
    );

    const job = await this.prismaService.contract.create({
      data: { url: uploadedContract.file },
    });

    return job;
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
