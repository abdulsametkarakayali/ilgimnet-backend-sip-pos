const express = require('express')
const router = express.Router()
const moneyCaseController = require('../controllers/moneycase.controller')
const {
  verifyToken,
  isCashierOrAdmin,
  isMemberOrCashierOrAdmin
} = require('../middlewares/auth')
const {
  cacheAllHistories,
  cacheMyHistories
} = require('../middlewares/redis')
const {
  checkHistory,
  checkSendInvoiceToEmail
} = require('../middlewares/formErrorHandling')
router
.get('/', verifyToken, isCashierOrAdmin, cacheAllHistories, moneyCaseController.getAllMoneyCase)
.get('/casetatus', verifyToken, isCashierOrAdmin, moneyCaseController.getCaseStatus)
.post('/', verifyToken, isCashierOrAdmin, checkHistory, moneyCaseController.insertMoneyCase)

module.exports = router