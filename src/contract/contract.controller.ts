import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ContractService } from './contract.service';
import { UploadContractImageDto } from './dto/update-contract.dto';

@Controller('contract')
@ApiTags('Contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post('img')
  @ApiOperation({ summary: 'Create contract' })
  @UseInterceptors(FilesInterceptor('images'))
  @ApiConsumes('multipart/form-data')
  uploadFilesForJob(
    @Body() body: UploadContractImageDto,
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 15 * 1024 * 1024 }),
          new FileTypeValidator({
            fileType: /image\/(jpg|jpeg|png|webp)/,
          }),
        ],
      }),
    )
    files: Express.Multer.File[],
  ) {
    return this.contractService.create(files, body.promptText);
  }

  @Post('pdf/:phone')
  @ApiOperation({ summary: 'Create contract from PDF' })
  @UseInterceptors(FilesInterceptor('images'))
  @ApiConsumes('multipart/form-data')
  createPdfContract(
    @Query('phone') phone: string,
    @Body() body: UploadContractImageDto,
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 15 * 1024 * 1024 }),
          new FileTypeValidator({
            fileType: /application\/(pdf)/,
          }),
        ],
      }),
    )
    files: Express.Multer.File[],
  ) {
    return this.contractService.createPdf(files, body.promptText, phone);
  }

  @Get(':phone')
  findAll(@Query('phone') phone: string) {
    return this.contractService.findAll(phone);
  }

  @Get(':phone/:id')
  findOne(@Param('id') id: string) {
    return this.contractService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contractService.remove(+id);
  }
}
