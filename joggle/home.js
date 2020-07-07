import express from 'express'

const route = express.Router()

/* GET users listing. */
route.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default route