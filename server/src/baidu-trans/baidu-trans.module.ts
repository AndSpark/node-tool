import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaiduTransEntity } from 'src/entities/baidu-trans.entity';
import { BaiduTransController } from './baidu-trans.controller';
import { BaiduTransService } from './baidu-trans.service';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [BaiduTransEntity]
    )
  ],
  controllers: [BaiduTransController],
  providers: [BaiduTransService]
})
export class BaiduTransModule {}
