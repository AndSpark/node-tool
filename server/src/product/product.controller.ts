import { Body, Controller, Get, Post } from '@nestjs/common';
import {ProductService} from './product.service'
@Controller('product')
export class ProductController {
  constructor(private readonly productSerive:ProductService){}
  @Post()
  async addProduct(@Body() body) {
    let { file, sqliteInfo } = body
    return await this.productSerive.addProduct(sqliteInfo, file)
  }
  @Post('translate')
  async translate(@Body() body) {
    let { file, sqliteInfo } = body
    return this.productSerive.translate(sqliteInfo, file)
    
  }
}
