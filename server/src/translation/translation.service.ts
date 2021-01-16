import { Injectable } from '@nestjs/common';
import translate from './htmlTranslation/translate'
@Injectable()
export class TranslationService {
  async htmlTranslate(htmlArr,from='zh',to='en') {
    console.log(translate);
    let jsons = await translate(htmlArr,from,to)
    return jsons
  }
}
