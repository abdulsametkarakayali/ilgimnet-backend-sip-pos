const express = require('express')
const router = express.Router()
const moneyCaseController = require('../controllers/moneycase.controller')
const {
  verifyToken,
  isCashierOrAdmin,
} = require('../middlewares/auth')
const {
  cacheAllHistories,
} = require('../middlewares/redis')
const {
  checkHistory,
} = require('../middlewares/formErrorHandling')
router
profile
  .get('/', verifyToken, isCashierOrAdmin, cacheAllHistories, moneyCaseController.getAllMoneyCase)
  .get('/casetatus', verifyToken, isCashierOrAdmin, cacheAllHistories, moneyCaseController.getCaseStatus)
  .post('/', verifyToken, isCashierOrAdmin, checkHistory, moneyCaseController.insertMoneyCase)
  .patch('/casetatus', verifyToken, isCashierOrAdmin, checkHistory, moneyCaseController.updateCaseStatus)

module.exports = router