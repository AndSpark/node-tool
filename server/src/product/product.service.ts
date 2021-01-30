import { Injectable } from '@nestjs/common';
import   Sqlite from './sqlite/sqlite'
import * as path from 'path'
import * as fs from 'fs'
import * as unzip from 'unzip-zhcn'
import * as compressing from 'compressing'
import * as ws from 'nodejs-websocket'

@Injectable()
export class ProductService {

	async addProduct(sqliteInfo, file) {
		let zipPath = path.join(__dirname, '..', '..', file.path)
		let time = new Date().getTime()
		let zipOutPath = path.join(__dirname, `../../upload/after/${time}/`)
		fs.mkdirSync(zipOutPath)
		unzip.extractSync(zipPath, zipOutPath, 'cp936')
		let fileName = file.filename.replace('.zip', '')
		let sqlite = new Sqlite({
			sitename: sqliteInfo.sitename,
			siteImgPath: path.join( zipOutPath , fileName,'product'),
			siteDBPath: path.join(zipOutPath ,fileName ,'878490a6ab380cf5bb4e7c97387e6850.db'),
			pcode: sqliteInfo.pcode,
			acode: sqliteInfo.acode,
			outPath: path.join(zipOutPath, fileName),
			isFileName:sqliteInfo.isFileName
		})
		await sqlite.addProduct()
		await compressing.zip.compressDir(path.join(zipOutPath, fileName), path.join(zipOutPath, file.filename))
		let zipUrl = process.env.BASE_URL_HTTP + `/upload/after/${time}/${file.filename}` 
		return zipUrl
	}

	translate(sqliteInfo, file) {

		const server = ws
				.createServer(connection => {
					connection.on('text', function(str) {
						console.log(str)
					})
					connection.on('connect', function(code) {
						console.log('开启连接', code)
					})
					connection.on('close', function() {
						console.log('连接关闭')
					})
					connection.on('error', function() {
						console.log('连接错误')
					})
				})
				.listen(process.env.PORT_WS)

		let time = new Date().getTime()
		let dbDir = path.join(__dirname, `../../upload/after/${time}/`)
		fs.mkdirSync(dbDir)

		let originDb = fs.readFileSync(path.join(__dirname, '..', '..', file.path))
		let dbPath = path.join(dbDir, file.filename)
		fs.writeFileSync(dbPath, originDb)

		let sqlite = new Sqlite({
			siteDBPath: dbPath,
			acode: sqliteInfo.acode,
			lang: sqliteInfo.lang,
			translateAcode: sqliteInfo.translateAcode,
			translateLang:sqliteInfo.sqliteInfo
		})

		let callback = function (total) {
			server.connections.forEach(function(conn) {
				conn.sendText(`${total}`)
			})
		}

		sqlite.translateTable(callback).then(_ => {
			let dbUrl = process.env.BASE_URL_HTTP + `/upload/after/${time}/${file.filename}`
			server.connections.forEach(function(conn) {
				conn.sendText(dbUrl)
			})
			server.close()
		})


		return process.env.BASE_URL_WS
	}
}
