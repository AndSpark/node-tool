const fanyi = require('./utils/fanyi');
module.exports = (jsons: string, from = 'zh', to = 'en') => {
  return new Promise(async (resolve, reject) => {
    let texts = JSON.parse(jsons)
    let words = texts.reduce((pre: any, cur: { origin: any; }) => {
      return pre + cur.origin + '\n';
    }, '');
    let res: { [x: string]: any; };
    if (texts.length) {
      res = await fanyi(words, from, to);
      let data = texts.map((item: { origin: string; }, i: string | number) => {
        if (item.origin.match(/(^\[.*\]$|^\{.*\}$)/)) {
          return {
            origin: item.origin,
            local: item.origin,
          };
        }
        return {
          origin: item.origin,
          local: res[i],
        };
      });
      resolve(JSON.stringify(data, null, 2));
    } else {
      resolve('');
    }
  });
};
