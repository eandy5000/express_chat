'use strict'

const express = require('express')

const app = express()

app.set('port', (process.env.PORT || 3000))


const server = app.listen(app.get('port'), () => {
    let port = server.address().port
    console.log(`listening on port: ${port}`);
})