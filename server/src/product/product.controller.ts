import { Controller, Get, Post } from '@nestjs/common';
import {ProductService} from './product.service'
@Controller('product')
export class ProductController {
  constructor(private readonly productSerive:ProductService){}
  @Post()
  addProduct() {
    return 
  }
}
