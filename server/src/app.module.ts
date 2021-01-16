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

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: './env',
    isGlobal:true
  }),MulterModule.registerAsync({
    useClass:MulterConfigService
  })],
  controllers: [AppController, ImageController, UploadController, TranslationController, ProductController],
  providers: [AppService, ImageService, TranslationService, ProductService],
})
export class AppModule {}
