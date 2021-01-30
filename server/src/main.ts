import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path'
import {mkdirSync} from 'fs'
import * as compression from 'compression'
import * as rimraf from 'rimraf'
async function bootstrap() {

  // const UploadAfter = join(__dirname, '../upload/after')
  // const UploadOrigin = join(__dirname, '../upload/origin')
  // rimraf(UploadAfter,_ => {mkdirSync(UploadAfter)})
  // rimraf(UploadOrigin, _ => { mkdirSync(UploadOrigin) })
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'upload'), {
    prefix:'/upload/'
  })
  app.useStaticAssets(join(__dirname, '..', 'static'), {
    prefix:'/'
  })
  app.enableCors()
  await app.listen(process.env.PORT_HTTP);
  app.use(compression())
}

bootstrap();
