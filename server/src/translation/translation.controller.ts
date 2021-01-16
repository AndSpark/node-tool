import { Body, Controller, Inject, Post } from '@nestjs/common';

import { TranslationService } from './translation.service'

@Controller('translation')
export class TranslationController {
  constructor(private readonly translationService: TranslationService){}
  @Post('html')
  async htmlTranslate(@Body() body) {
    let {htmlArr, lang} = body
    let from: string, to;
    let htmlArrs = htmlArr.map(v => v.html)

    if (lang === 1) {
      from = 'zh'
      to = 'en'
    } else if (lang === 2) {
      from = 'en'
      to = 'zh'
    }
    let jsons = await this.translationService.htmlTranslate(htmlArrs,from,to)

    return htmlArr.map((v,i) =>  {
      return {
        ...v,
        json:jsons[i]
      }

    })
  }
}
