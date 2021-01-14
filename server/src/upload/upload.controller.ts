import {  Controller, Post,  UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor} from '@nestjs/platform-express'

@Controller('upload')
export class UploadController {
  @Post('image')
  @UseInterceptors(FilesInterceptor('files'))
  uploadImage(@UploadedFiles() files:any) {
    return files
  }
}
