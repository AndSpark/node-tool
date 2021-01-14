import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp'
import * as path from 'path'
import * as fs from 'fs'
import * as compressing from 'compressing'
@Injectable()
export class ImageService {
  
  async imageProcess(files: any[], sharpInfo) {
    let dir = new Date().getTime().toString()
    let dirPath = path.join(__dirname,'../../upload/after/' , dir)
    fs.mkdirSync(dirPath)
    let filesInfo = await Promise.all(files.map(async file => {
      let filePath = path.resolve(__dirname, '../../', file.path)
      let {data,info} = await sharp(filePath).toBuffer({ resolveWithObject: true })
      let { width, height } = info
      let outPath = path.resolve(dirPath, file.filename)
      let resize, extend;
      if (width > height || width === height) {
         resize = {
          width:sharpInfo.width - 2 * sharpInfo.XPadding
        }
        let YPadding = Math.round((sharpInfo.height - height * resize.width / width) / 2)
         extend = {
          left: sharpInfo.XPadding,
          right: sharpInfo.XPadding,
          top: YPadding,
          bottom: YPadding,
          background: { r: 255, g:255, b: 255, alpha: 1 }
        }
      } else {
         resize = {
          height:sharpInfo.height - 2 * sharpInfo.YPadding
        }
        let XPadding = Math.round((sharpInfo.width - width * resize.height / height) / 2)
         extend = {
          left: XPadding,
          right: XPadding,
          top: sharpInfo.YPadding,
          bottom: sharpInfo.YPadding,
          background: { r: 255, g:255, b: 255, alpha: 1 }
        }
        
      }
      let fileinfo = await sharp(data).resize(resize).extend(extend).toFile(outPath)
      return {
        ...fileinfo,
        url: 'http://localhost:3000' + file.destination.slice(1).replace('origin', 'after') + '/' + dir + '/' + file.filename,
        name:file.filename
      }
    }))
    await compressing.zip.compressDir(dirPath, dirPath+'.zip')
    return {
      filesInfo,
      download:'http://localhost:3000/upload/after/'  + dir + '.zip'
    }
  }

}
