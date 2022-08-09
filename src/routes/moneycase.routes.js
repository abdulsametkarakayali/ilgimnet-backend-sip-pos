const express = require('express')
const router = express.Router()
const moneyCaseController = require('../controllers/moneycase.controller')
const {
  verifyToken,
  isAdmin,
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
.get('/', verifyToken, isCashierOrAdmin, moneyCaseController.getAllMoneyCase)
.get('/casestatus', verifyToken, isCashierOrAdmin, moneyCaseController.getCaseStatus)
.post('/', verifyToken, isAdmin, moneyCaseController.insertMoneyCase)
.patch('/casestatus', verifyToken, isCashierOrAdmin, moneyCaseController.updateCaseStatus)
module.exports = router