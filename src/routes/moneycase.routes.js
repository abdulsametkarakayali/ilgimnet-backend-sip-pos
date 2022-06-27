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
.get('/casestatus', verifyToken, isCashierOrAdmin, moneyCaseController.getCaseStatus)
.post('/', verifyToken, isCashierOrAdmin, checkHistory, moneyCaseController.insertMoneyCase)
.patch('/casestatus/:id', verifyToken, isCashierOrAdmin, moneyCaseController.updateCaseStatus)
module.exports = router