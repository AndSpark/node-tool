import * as fs from 'fs'
const path = require('path');
let info:info, sqliteDB;
const moment = require('moment');
const SqliteDB = require('./utils/sqliteDB').SqliteDB;
const { readFiles } = require('./utils/file');
const translate = require('./utils/fanyi');
const { htmlEncode, htmlDecode } = require('./utils/htmlEncode');
const translateHtml = require('./utils/translateHtml');

interface info {
  sitename: string,
  siteImgPath: string,
  siteDBPath: string,
  pcode: number,
  acode: string,
  lang: string,
  translateLang: string,
  translateAcode: string,
  outPath:string
}

class Sqlite {
  ay_content_sortLength: number;
  constructor(infos:info) {
    info = infos;
    sqliteDB = new SqliteDB(info.siteDBPath);
  }

  async addProduct() {
    let product = await this.addProductArr(info.siteImgPath, 2)
    await this.toAySort(product, info.acode)
    await this.toAyContent(product, info.acode, info.outPath, info.sitename)
    this.save();
  }

  async translateTable() {
    await this.sortTranslate();
    await this.contentTranslate();
    this.save();
  }

  async addProductArr(dirPath: string, pcode:number ) {
    let arr = []

    let [dirId, scode] = await this.getStartId('ay_content_sort', [
      'id',
      'scode',
    ]);

    let [fileId] = await this.getStartId('ay_content', ['id']);

    function readFiles(dirPath, arr, scode,pcode) {
      let files = fs.readdirSync(dirPath)
      files.forEach((filename, i) => {
        let filedir = path.join(dirPath, filename)
        let stats = fs.statSync(filedir)
        const isFile = stats.isFile()
        const isDir = stats.isDirectory()
        if (isFile) {
          arr.push({
            name: filename,
            type: 'file',
            path:filedir,
            id: fileId++,
            scode:scode - 1,
          })
        }
        if (isDir) {
          arr.push({
            name: filename,
            type: 'dir',
            id:dirId++,
            scode: scode++,
            pcode:pcode,
            list: [],
          })
          readFiles(filedir, arr.find(dir => dir.name === filename).list, scode,scode)
        }
      })
    }
    readFiles(dirPath, arr, scode, pcode)
    return arr
  }

  async toAySort(product, acode) {

    function toSort(product: any[]):any[] {
      return product.reduce((pre, cur) => {
        if (cur.type === 'dir') {
          pre.push(cur)
        }
        if (cur.list) {
          pre.push(...toSort(cur.list))
        }
        return pre
      },[])
    }
    
    
    let sortArr = toSort(product)
    
    sortArr = sortArr.map(v => {
      return [
        v.id,
        acode,
        3,
        v.pcode,
        v.scode,
        v.name,
        'product.html',
        'proshow.html',
        1,
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        255,
        'admin',
        'admin',
        moment().format('YYYY-MM-DD HH:mm:ss'),
        moment().format('YYYY-MM-DD HH:mm:ss'),
      ]
    })

    this.addSortSql(sortArr);
  }

  async toAyContent(product, acode,outPath,site) {

    function toContent(product: any[]): any[] {
      return product.reduce((pre, cur) => {
        if (cur.type === 'file') {
          pre.push(cur)
        }
        if (cur.list) {
          pre.push(...toContent(cur.list))
        }
        return pre
      },[])
    }
  
    let ContentArr = toContent(product)
    const today = moment().format('YYYYMMDD')
    const now = moment().format('YYYYMMDDHHmm')
    fs.mkdirSync(path.join(outPath, today))
  
    ContentArr =  ContentArr.map((v,i) => {
      let { name, dir, ext } = path.parse(v.path)
      let imgBuffer = fs.readFileSync(v.path)
      let imgName = now + i + ext
      let imgPath = path.join(outPath, today, imgName)
      fs.writeFileSync(imgPath, imgBuffer)
  
      return [
        v.id,
        acode,
        v.scode,
        '',
        name,
        '#333333',
        '',
        '',
        'admin',
        '本站',
        '',
        moment().format('YYYY-MM-DD HH:mm:ss'),
        `/Sites/${site}/static/upload/image/${today}/${imgName}`,
        `/Sites/${site}/static/upload/image/${today}/${imgName}`,
        '',
        '',
        '',
        '',
        '',
        255,
        '1',
        '0',
        '0',
        '0',
        0,
        0,
        0,
        'admin',
        'admin',
        moment().format('YYYY-MM-DD HH:mm:ss'),
        moment().format('YYYY-MM-DD HH:mm:ss'),
      ]
    })
    this.addContentSql(ContentArr);

  }

  async sortTranslate() {
    let table = 'ay_content_sort';
    let ay_cotent_sortTable:any = await this.getTableListSql(table);
    let ids = ay_cotent_sortTable.map((v) => v.id);
    let l = Math.max(...ids);
    this.ay_content_sortLength = l;
    let words = ay_cotent_sortTable.reduce((pre, cur) => {
      return pre + '\n' + cur.name;
    }, '');

    let transArr = await translate(words, info.lang, info.translateLang);

    let tableContent = ay_cotent_sortTable.map((item, i) => {
      item.id = item.id * 1 + l;
      item.scode = String(item.scode * 1 + l);
      item.acode = info.translateAcode;
      if (item.pcode && item.pcode != 0) {
        item.pcode = String(item.pcode * 1 + l);
      }
      item.name = transArr[i];
      return Object.values(item);
    });

    this.addSortSql(tableContent);
  }

  async contentTranslate() {
    let table = 'ay_content';
    let ay_contentTable:any = await this.getTableListSql(table);
    let ids = ay_contentTable.map((v) => v.id);
    let l = Math.max(...ids);

    let transArr = await Promise.all(
      ay_contentTable.map(async (v) => {
        let title = await translate(v.title, info.lang, info.translateLang);
        if (!title) {
          title = ' ';
        }
        return title;
      }),
    );

    let tableContent = await Promise.all(
      ay_contentTable.map(async (item, i) => {
        item.id = item.id * 1 + l;
        item.scode = String(item.scode * 1 + this.ay_content_sortLength);
        item.acode = info.translateAcode;
        if (item.pcode && item.pcode != 0) {
          item.pcode = String(item.pcode * 1 + l);
        }
        item.title = transArr[i];

        if (item.content.length) {
          let html = htmlDecode(item.content).replace(/\&.+?;/g, ' ');

          let newHtml = await translateHtml(
            html,
            info.lang,
            info.translateLang,
          );

          item.content = htmlEncode(newHtml);
        }

        return Object.values(item);
      }),
    );

    this.addContentSql(tableContent);
  }

  async getStartId(table, types) {
    let ids:any = await Promise.all(
      types.map((v) => {
        return this.getLastIdSql(table, v);
      }),
    );
    return types.map((v, i) => {
      return ++ids[i];
    });
  }


  getTableListSql(table) {
    return new Promise((resolve, reject) => {
      sqliteDB.queryData(
        `select * from ${table} where acode = '${info.acode}'`,
        (arr: any[]) => {
          resolve(arr);
        },
      );
    });
  }

  getLastIdSql(table, id) {
    let querySql = `select ${id} from ${table} order by cast(${id} as float) desc limit 1`;
    return new Promise((resolve, reject) => {
      sqliteDB.queryData(querySql, function (arr) {
        resolve(arr[0][id]);
      });
    });
  }

  addSortSql(contentArr) {
    let insertExtSql =
      'insert into ay_content_sort(id,acode,mcode,pcode,scode,name,listtpl,contenttpl,status,outlink,subname,ico,pic,title,keywords,description,filename,sorting,create_user,update_user,create_time,update_time) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    sqliteDB.insertData(insertExtSql, contentArr);
  }

  addContentSql(contentArr) {
    let insertExtSql =
      'insert into ay_content(id,acode,scode,subscode,title,titlecolor,subtitle,filename,author,source,outlink,date,ico,pics,content,tags,enclosure,keywords,description,sorting,status,istop,isrecommend,isheadline,visits,likes,oppose,create_user,update_user,create_time,update_time) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

    sqliteDB.insertData(insertExtSql, contentArr);
  }

  addExtSql(contentArr) {
    var insertExtSql =
      'insert into ay_content_ext(extid,contentid,ext_Origin,ext_Name,ext_Certification,ext_Model,ext_Quantity,ext_Price,ext_Details,ext_Time,ext_Payment,ext_Ability) values(?,?,?,?,?,?,?,?,?,?,?,?)';

    sqliteDB.insertData(insertExtSql, contentArr);
  }

  save() {
    sqliteDB.close();
  }
}

export default Sqlite