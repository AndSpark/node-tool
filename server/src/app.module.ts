import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageController } from './image/image.controller';
import { ImageService } from './image/image.service';
import { MulterConfigService } from './upload/multerConfig.service';
import { UploadController } from './upload/upload.controller';

@Module({
  imports: [MulterModule.registerAsync({
    useClass:MulterConfigService
  })],
  controllers: [AppController, ImageController, UploadController],
  providers: [AppService, ImageService],
})
export class AppModule {}
