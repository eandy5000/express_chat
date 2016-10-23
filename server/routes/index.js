'use strict'

const express = require('express')
const router = express.Router()


router
    .route('/')
    .get((req, res) => {
        res
            .send(`<h1>Hi there</h1>`)
    })

router
    .route('/dashboard')
    .get((req, res) => {
        res
            .send('<h1>I am the dashboard</h1>')
    })






module.exports = router