'use strict'

const express = require('express')

const app = express()
const router = require('./routes')


app.set('port', (process.env.PORT || 3000))
app.set('view engine', 'ejs')
app.set('views', (__dirname + '/views'))


app.use('/', router)


const server = app.listen(app.get('port'), () => {
    let port = server.address().port
    console.log(`listening on port: ${port}`)
})