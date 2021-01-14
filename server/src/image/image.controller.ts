import { Body, Controller, Post } from '@nestjs/common';
import {ImageService} from './image.service'
@Controller('image')
export class ImageController {

  constructor(private readonly imageSerive: ImageService){}

  @Post('process')
  async imageProcess(@Body() body) {
    let { files, sharpInfo } = body
    let filesInfo = await this.imageSerive.imageProcess(files,sharpInfo)
    return filesInfo
  }
}
