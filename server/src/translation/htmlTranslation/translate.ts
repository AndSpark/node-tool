const htmlParse = require('./lib/parse.js');
const htmlTranslate = require('./lib/translate');

const translate = function(htmlArr,from='zh',to='en') {
  return Promise.all(
    htmlArr.map(async (html) => {
      let json = htmlParse(html);
      let json2 = await htmlTranslate(json,from,to);
      return json2;
    }),
  );
}
export default translate