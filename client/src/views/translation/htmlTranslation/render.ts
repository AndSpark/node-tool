const lodash = require('lodash')
const render = require('posthtml-render')
const html2textss = require('./lib/utils/html2texts')

let renderHtml = (html: any, texts: any) => {
	const { texts: originTexts, tree } = html2textss(html)
	originTexts.forEach((item: { paths: any }, index: string | number) => {
		lodash.set(tree, item.paths, texts[index].local)
	})

	const newHtml = render(tree)

	return newHtml
}

export default renderHtml