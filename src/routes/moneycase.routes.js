const express = require('express')
const router = express.Router()
const moneyCaseController = require('../controllers/moneycase.controller')
const {
  verifyToken,
  isAdmin,
  isCashierOrAdmin,
  isMemberOrCashierOrAdmin
} = require('../middlewares/auth')/*
const {
  cacheAllHistories,
  cacheMyHistories
} = require('../middlewares/redis')
*/
const {
  checkHistory,
  checkSendInvoiceToEmail
} = require('../middlewares/formErrorHandling')

router
  .get('/', verifyToken, isCashierOrAdmin, cacheAllHistories, moneyCaseController.getAllMoneyCase)
  .post('/', verifyToken, isCashierOrAdmin, checkHistory, moneyCaseController.insertMoneyCase)
  .post('/send-email-receipt', verifyToken, isCashierOrAdmin, checkSendInvoiceToEmail, moneyCaseController.sendEmailMember)
  .patch('/:id', verifyToken, isAdmin, checkHistory, moneyCaseController.updateHistory)
  .delete('/:id', verifyToken, isAdmin, moneyCaseController.deleteHistory)
  .get('/:id', verifyToken, isCashierOrAdmin, moneyCaseController.getHistoryById)
  .get('/my-history/:id', verifyToken, isMemberOrCashierOrAdmin, cacheMyHistories, moneyCaseController.getMyHistory)

module.exports = router