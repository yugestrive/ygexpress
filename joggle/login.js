// get post put delete
import path from 'path'
import fs from 'fs'
import { mongo } from '../db'

import express from 'express'
import Mock from 'mockjs'

const ROOT_PATH = path.join(__dirname, '..', 'db')
const route = express.Router()

/* GET users listing. */
route.post('/login/login', (req, res, next) => {
  const body = req.body
  mongo._handleFind('users', body, (data) => {
    console.log(body, data, 'findData')
    if (data.length) {
      res.send({
        code: 0,
        msg: '登录成功！',
        data: {
          user: {
            name: '张三测试',
          },
        },
      })
    } else {
      res.send({
        code: 500,
        msg: '用户名密码不匹配！',
        data: null,
      })
    }
  })
})

export default route
