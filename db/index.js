/*
 * @Autor: yugeStrive
 * @Date: 2020-10-22 13:56:05
 * @LastEditTime: 2020-10-22 19:27:26
 * @Description: Mongo主入口文件
 */
import mongodb from 'mongodb'
import CONFIG from '../config/index'

const MongoClient = mongodb.MongoClient
const DB_URL = CONFIG.DB_URL

// 连接数据库

class MongoDB {
  client = null

  constructor(url) {
    this.client = MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }
  
  // 数据库新增数据
  _handleInsert(LOB, data = { account: 13413252521, password: 'zxcvbnm' }) {
    this.client.then((c) => {
      c.db('superUser')
        .collection(LOB)
        .insertOne(data, (err, res) => {
          if (err) throw err
          console.log('插入成功')
        })
    })
  }
  // 查询数据库
  _handleFind(LOB, data, callback) {
    this.client.then((c) => {
      c.db('superUser')
        .collection(LOB)
        .find(JSON.stringify(data))
        .toArray((err, res) => {
          if (err) throw err
          callback(res)
        })
    })
  }
}

export const mongo = new MongoDB(DB_URL)
