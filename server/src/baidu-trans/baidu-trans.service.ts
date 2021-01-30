import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaiduTransEntity } from 'src/entities/baidu-trans.entity';
import { Repository } from 'typeorm';
import {plainToClass} from 'class-transformer'
import { validate } from 'class-validator'
import { CreateBaiduTransDTO} from 'src/models/baidu-trans.model'

import axios from 'axios'
import * as cheerio from 'cheerio'
@Injectable()
export class BaiduTransService {
  private readonly baiduTransDeveloper: string = 'https://api.fanyi.baidu.com/api/trans/product/desktop?req=developer'
  private readonly baiduTransQuery: string = 'https://api.fanyi.baidu.com/api/trans/product/desktopint?req=query_balance'
  
  constructor(@InjectRepository(BaiduTransEntity) private baiduTransRepo: Repository<BaiduTransEntity>){}

  async create(BDUSS: string) {
    const { appid, secret } = await this.getBaiduTransDetail(BDUSS)
    const data:CreateBaiduTransDTO = { BDUSS, appid, secret }
    const baiduTrans = this.baiduTransRepo.create(data)
    return await baiduTrans.save()
  }

  async find(BDUSS: string) {
    
  }

  async getBaiduTransDetail(BDUSS: string) {
    let { data} = await axios({
      url: this.baiduTransDeveloper,
      method: 'get',
      headers: {
        Cookie:`BDUSS=${BDUSS}`
      }
    })
    const $ = cheerio.load(data)
    
    let [appid, secret] = $('.apply-card .info-line').text().replace('APP ID：', '').replace('密钥：', ',').split(',')

    if (!appid) {
      throw new BadRequestException('BDUSS不正确')
    }

    return {appid,secret}
  }

  async getBiaduTransQuery(BDUSS: string) {
    let { data} = await axios({
      url: this.baiduTransQuery,
      method: 'get',
      headers: {
        Cookie:`BDUSS=${BDUSS}`
      }
    })
    if (data.error_code == '68000') {
      throw new BadRequestException('BDUSS不正确')
    }
    return data.data
  }
}
