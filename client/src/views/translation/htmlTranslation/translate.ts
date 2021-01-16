const htmlParse = require('./lib/parse');
const htmlTranslate = require('./lib/translate');

const translate = function(htmlArr: any[]) {
  return Promise.all(
    htmlArr.map(async (html) => {
      let json = htmlParse(html);
      let json2 = await htmlTranslate(json);
      return json2;
    }),
  );
}
export default translate