import lodash from 'lodash'
const html2texts = require('./html2texts')
const fanyi = require('./fanyi')
const render = require('posthtml-render')

module.exports = async function translateHtml(html, from = 'zh', to = 'en') {
	const { texts } = html2texts(html)

	const localTexts = texts.map(({ text }) => {
		return { origin: text, local: '' }
	})

	let words = localTexts.reduce((pre, cur) => {
		if (cur.origin.match(/\&.+\;?/)) {
			cur.origin = cur.origin.replace(/\&.+\;?/, ' ')
		}
		return pre + cur.origin + '\n'
	}, '')
	let res

	try {
		res = await fanyi(words, from, to)
	} catch (error) {
		console.log('翻译出错')
	}

	let data = localTexts.map((item, i) => {
		return {
			origin: item.origin,
			local: res[i],
		}
	})

	const { texts: originTexts, tree } = html2texts(html)
	originTexts.forEach((item, index) => {
		lodash.set(tree, item.paths, data[index].local)
	})

	const newHtml = render(tree)

	return newHtml
}
