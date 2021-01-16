import {  Controller, Post,  UploadedFile,  UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor} from '@nestjs/platform-express'

@Controller('upload')
export class UploadController {
  @Post('image')
  @UseInterceptors(FilesInterceptor('files'))
  uploadImage(@UploadedFiles() files:any) {
    return files
  }
  @Post('html')
  @UseInterceptors(FilesInterceptor('files'))
  uploadHtml(@UploadedFiles() files:any) {
    return files
  }
  @Post('product')
  @UseInterceptors(FilesInterceptor('file'))
  uploadProduct(@UploadedFiles() files:any) {
    return files 
  }
}
