import { Body, Controller, Get, Post } from '@nestjs/common';
import { BaiduTransService } from './baidu-trans.service';

@Controller('baidu-trans')
export class BaiduTransController {

  constructor(
    private baiduTransService: BaiduTransService
  ){}

  @Post()
  async getBaiduTransInfo(@Body() body) {
    let {BDUSS} = body
    return await this.baiduTransService.create(BDUSS)
  }
}
