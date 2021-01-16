const html2texts = require('./utils/html2texts');

module.exports = (html:string) => {
  const { texts } = html2texts(html);
  const localTexts = texts.map(({ text }:any) => {
    return { origin: text, local: '' };
  });
  return JSON.stringify(localTexts, null, 2);
};
