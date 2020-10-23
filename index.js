/*
 * @Autor: yugeStrive
 * @Date: 2020-10-22 13:56:05
 * @LastEditTime: 2020-10-22 15:52:11
 * @Description: 服务主入口
 */
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import './db'
import CONFIG from './config/index'

import { registerRoutes } from './joggle'

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use('/static', express.static('static'))

registerRoutes(app)

app.all('*', (req, res) => {
  res.status(404).json({
    code: 404,
    msg: 'not found',
    data: []
  })
})

app.listen(CONFIG.PORT, () => console.log(CONFIG.STYLE, `Server runing: http://localhost:${CONFIG.PORT}`))
