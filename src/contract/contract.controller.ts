import {
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ContractService } from './contract.service';

@Controller('contract')
@ApiTags('Contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @ApiBearerAuth()
  @Post()
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create contract' })
  @UseInterceptors(FilesInterceptor('images'))
  @ApiConsumes('multipart/form-data')
  uploadFilesForJob(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 3 * 1024 * 1024 }),
          new FileTypeValidator({
            fileType: /image\/(pdf|jpeg|png|webp|docx)/,
          }),
        ],
      }),
    )
    files: Express.Multer.File[],
  ) {
    return this.contractService.create(files);
  }

  @Get()
  findAll() {
    return this.contractService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contractService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contractService.remove(id);
  }
}
