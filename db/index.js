import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient
const DB_URL = 'mongodb://localhost:27017'

MongoClient.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
  if (err) throw err
  let db = client.db('superUser')
  let oneUser = { id: 1, account: 13413252521, password: 'zxcvbnm' }
  db.collection('users').insertOne(oneUser, (err, res) => {
      if (err) throw err
      console.log('插入成功')
  })
})
