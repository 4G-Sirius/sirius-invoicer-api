import { ApiProperty } from '@nestjs/swagger';

export class UploadContractDto {
  @ApiProperty({ items: { format: 'binary', type: 'string' }, type: 'array' })
  images: Express.Multer.File[];
}
