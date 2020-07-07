// get post put delete
import path from 'path'
import fs from 'fs'

import express from 'express'
import Mock from 'mockjs'

const ROOT_PATH = path.join(__dirname, '..', 'db')
const route = express.Router()

/* GET users listing. */
route.post('/login/bind', function(req, res, next) {
  res.send('respond with a resource')
});

export default route