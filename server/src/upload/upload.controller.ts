import {  Body, Controller, Post,  UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor} from '@nestjs/platform-express'
const path = require('path')
@Controller('upload')
export class UploadController {
  @Post('image')
  @UseInterceptors(FilesInterceptor('files'))
  uploadImage(@UploadedFiles() files) {
    return files.map((file) => {
      return {
        url: 'http://localhost:3000/'+file.path.replace(/\\/g,'/'),
        name: file.originalname
      }
    })
  }
}
