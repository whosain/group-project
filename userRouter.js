var express = require('express')
var router = express.Router()
var userController = require('./userController.js')

router.get('/', userController.getUser)

module.exports = router