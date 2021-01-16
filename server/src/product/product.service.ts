import { Injectable } from '@nestjs/common';
import   Sqlite from './sqlite/sqlite'
import * as path from 'path'
@Injectable()
export class ProductService {
  test() {
    console.log(__dirname);
let s = new Sqlite({
	sitename: 'fushi',
	siteImgPath: path.join(__dirname, 'test', 'product'),
	siteDBPath: path.join(__dirname, 'test', '878490a6ab380cf5bb4e7c97387e6850.db'),
	pcode: 2,
	lang: 'en',
	translateLang: 'zh',
	acode: 'cn',
  translateAcode: 'en',
  outPath:path.join(__dirname,'../../upload/after')
}
)

s.addProduct()
  }
}
