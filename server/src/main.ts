import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path'
import * as compression from 'compression'
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'upload'), {
    prefix:'/upload/'
  })
  app.enableCors()
  await app.listen(3000);
  app.use(compression())
}
bootstrap();
