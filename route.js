const express = require('express')
const {createText, getText} = require('./controllers')
const textRouter = express.Router()

textRouter.post('/text', createText)
textRouter.get('/text', getText)

module.exports = textRouter