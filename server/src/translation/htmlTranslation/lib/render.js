const fs = require("fs");
const path = require("path");
const lodash = require("lodash");
const render = require("posthtml-render");
const html2texts = require("./utils/html2texts");

module.exports = (htmlfile, jsonfile) => {
  const htmlpath = htmlfile;
  const textspath = jsonfile;
  let { dir, name } = path.parse(htmlfile);
  if (!fs.existsSync(path.join(dir, "i18n"))) {
    fs.mkdirSync(path.join(dir, "i18n"));
  }

  const outpath = path.join(dir, "i18n", name + ".html");
  const html = fs.readFileSync(htmlpath).toString();
  delete require.cache[require.resolve(textspath)];
  const texts = require(textspath);
  const { texts: originTexts, tree } = html2texts(html);
  originTexts.forEach((item, index) => {
    lodash.set(tree, item.paths, texts[index].local);
  });

  const newHtml = render(tree);

  fs.writeFile(outpath, newHtml, (err) => {
    if (err) console.log(err);
    console.log(`还原成功，已生成文件 ${outpath}`);
  });
};
