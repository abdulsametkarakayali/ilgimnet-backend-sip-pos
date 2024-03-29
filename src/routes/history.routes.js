const express = require('express')
const router = express.Router()
const historyController = require('../controllers/history.controller')
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
  .get('/', verifyToken, isCashierOrAdmin,  historyController.getAllHistory)
  .get('/getBestSellingToday', verifyToken, isCashierOrAdmin, historyController.getBestSellingToday)
  .post('/', verifyToken, isCashierOrAdmin, historyController.insertHistory)
  .post('/send-email-receipt', verifyToken, isCashierOrAdmin, checkSendInvoiceToEmail, historyController.sendEmailMember)
  .patch('/:id', verifyToken, isAdmin, checkHistory, historyController.updateHistory)
  .delete('/:id', verifyToken, isAdmin, historyController.deleteHistory)
  .get('/:id', verifyToken, isCashierOrAdmin, historyController.getHistoryById)
  .get('/my-history/:id', verifyToken, isMemberOrCashierOrAdmin, historyController.getMyHistory)

module.exports = router