import  axios from 'axios'
// const appid = '20201208000641832'
// const secret = 'QHFmDIXHEK6JGmR8S3Vg'
const SparkMD5 = require('spark-md5')
const appid = '20201215000647582'
const secret = '0IfZkeEAc8PkRIseU_7y'

let instanceNum = 0
let maxNum = 10
let total = 0
module.exports = function fanyi(word, from = 'zh', to = 'en') {
	const salt = Date.now()
	const sign = SparkMD5.hash(`${appid}${word}${salt}${secret}`)
	const url = `http://api.fanyi.baidu.com/api/trans/vip/translate`

	return new Promise((resolve, reject) => {
		const instance = axios.create()

		instance.interceptors.request.use(
			async config => {
				total++
				if (instanceNum >= maxNum) {
					let timer = null
					await new Promise(resolve => {
						timer = setInterval(() => {
							if (instanceNum < maxNum) {
								resolve(0)
							}
						}, 1000)
					})
					instanceNum++
					clearInterval(timer)
					return config
				} else {
					instanceNum++
					return config
				}
			},
			err => {
				console.log(err)
				return err
			}
		)

		instance.interceptors.response.use(
			response => {
				setTimeout(() => {
					instanceNum--
					total--
				}, 1100)
				return response
			},
			err => {
				return err
			}
		)

		instance({
			url,
			params: {
				q: word,
				from,
				to,
				appid,
				salt,
				sign,
			},
		})
			.then(res => {
				const { data } = res
				if (!data.trans_result) {
					console.log(data)
				}
				if (!data.trans_result.length) return ''

				resolve(
					{
						data:data.trans_result.map(v => {
							return v.dst
						}),
						total
					}
				)
			})
			.catch(err => {
				console.log(err)
				reject(err)
			})
	})
}
