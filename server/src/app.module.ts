import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageController } from './image/image.controller';
import { ImageService } from './image/image.service';
import { MulterConfigService } from './upload/multerConfig.service';
import { UploadController } from './upload/upload.controller';
import { TranslationService } from './translation/translation.service';
import { TranslationController } from './translation/translation.controller';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseConnectionService } from './database-connection.service';
import { BaiduTransModule } from './baidu-trans/baidu-trans.module';

import * as path from 'path'
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: path.join(__dirname,'../.env'),
    isGlobal:true
  }),MulterModule.registerAsync({
    useClass:MulterConfigService
  }), TypeOrmModule.forRootAsync({
    useClass:DatabaseConnectionService
  }),  BaiduTransModule],
  controllers: [AppController, ImageController, UploadController, TranslationController, ProductController],
  providers: [AppService, ImageService, TranslationService, ProductService],
})
export class AppModule {}
