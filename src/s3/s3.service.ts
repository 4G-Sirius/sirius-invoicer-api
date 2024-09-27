import { DeleteObjectCommand, PutObjectCommand, S3 } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class S3Service {
  private s3: S3;

  constructor(private configService: ConfigService) {
    this.s3 = new S3({
      credentials: {
        accessKeyId: configService.getOrThrow('AWS_ACCESS_KEY'),
        secretAccessKey: configService.getOrThrow('AWS_SECRET_KEY'),
      },
      region: configService.getOrThrow('AWS_REGION'),
    });
  }

  async deleteFile(Key: string, Bucket: string) {
    const deleteCommand = new DeleteObjectCommand({ Bucket, Key });

    return this.s3.send(deleteCommand);
  }

  async uploadFile(file: Express.Multer.File, Bucket: string) {
    const fileExtension = path.extname(file.originalname);
    const filename = `${uuidv4()}${fileExtension}`;

    const putCommand = new PutObjectCommand({
      Body: file.buffer,
      Bucket,
      Key: filename,
    });

    await this.s3.send(putCommand);
    return { file: filename };
  }
}
