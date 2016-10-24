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
            .render('test', {foo : "dog"})
    })

router
    .route('*')
    .get((req, res) => {
        res
            .status(404)
            .json({"message": "Page not found"})
    })






module.exports = router