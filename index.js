import express from 'express'
import cors from 'cors'

import './db'

import { registerRoutes } from './joggle'

const app = express()
const port = 3000
const style = '\x1B[36m%s\x1B[0m'

app.use(cors())
app.use(express.urlencoded({ extended: false }))
// app.use('/static', express.static('static'))
registerRoutes(app)

app.all('*', (req,res)=> {
    res.status(404).json({
        code: 404,
        msg: 'not found'
    })
})

app.listen(port, () => console.log(style, `Server runing: http://localhost:${port}`))
