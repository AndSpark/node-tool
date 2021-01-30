/**
 * File: sqlite.js.
 * Author: W A P.
 * Email: 610585613@qq.com.
 * Datetime: 2018/07/24.
 */

var fs = require('fs')
var sqlite3 = require('sqlite3')
var sqlite =  require('sqlite')

class SqliteDB {
	db: any
	
	constructor() {
		
	}
	async init(file) {
		this.db = await sqlite.open({
			filename: file,
			driver:sqlite3.Database
		})
	}
	async insertData(sql, objects) {
		for (var i = 0; i < objects.length; ++i) {
			let res = await this.db.run(sql, objects[i])
		}
	}
	async queryData(sql, callback) {
		const result = await this.db.all(sql)
		callback(result)
	}
	async close() {
		await this.db.close()
	}
}


module.exports = SqliteDB