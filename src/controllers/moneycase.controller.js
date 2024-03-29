const MoneyCaseModels = require('../models/moneycase.model')
const helpers = require('../helpers/helpers')

const MoneyCase = {
  getAllMoneyCase: (req, res) => {
    MoneyCaseModels.getAllMoneyCase()
      .then(response => {
        const resultMoneyCase = response
        helpers.redisInstance().setex('getAllMoneyCases', 60 * 60 * 12, JSON.stringify(resultMoneyCase))
        helpers.response(res, resultMoneyCase, res.statusCode, helpers.status.found, null)
      }).catch(err => {
        helpers.response(res, [], err.statusCode, null, null, err)
      })
  },

  getLastInsertId: (req, res) => {
    MoneyCaseModels.getLastInsertId()
      .then(response => {
        const resultLastInsertId = response
        helpers.response(res, resultLastInsertId, res.statusCode, helpers.status.found, null)
      }).catch(err => {
        helpers.response(res, [], err.statusCode, null, null, err)
      })
  },
  


  getCaseStatus: (req, res) => {
    MoneyCaseModels.getCaseStatus()
      .then(response => {
        const resultMoneyCaseStatus = response
        helpers.response(res, resultMoneyCaseStatus, res.statusCode, helpers.status.found)
      }).catch(err => {
        helpers.response(res, [], err.statusCode, null, null, err)
      })
  },


  getMyMoneyCase: (req, res) => {
    const order = req.query.order
    const id = req.params.id
    MoneyCaseModels.getMyMoneyCase(order, id)
      .then(response => {
        const resultMoneyCase = response
        helpers.redisInstance().setex('getMyMoneyCases', 60 * 60 * 12, JSON.stringify(resultMoneyCase))
        helpers.response(res, resultMoneyCase, res.statusCode, helpers.status.found, null)
      }).catch(err => {
        helpers.response(res, [], err.statusCode, null, null, err)
      })
  },
  insertMoneyCase: (req, res) => {
    const {
      casetime,
      casetype,
      salesNo,
      moneycaseamount,
      descriptions,
      transacter,
    } = req.body

    const newMoneyCase = {
      casetime,
      casetype,
      salesNo,
      moneycaseamount,
      descriptions,
      transacter
    }

    MoneyCaseModels.insertMoneyCase(newMoneyCase)
      .then(response => {
        const resultMoneyCase = response
        MoneyCaseModels.getMoneyCaseById(resultMoneyCase.insertId)
          .then(response => {
            const resultMoneyCase = response[0]
            helpers.response(res, resultMoneyCase, res.statusCode, helpers.status.insert, null)
          }).catch(err => {
            helpers.response(res, [], err.statusCode, null, null, err)
          })
      }).catch(err => {
        helpers.response(res, [], err.statusCode, null, null, err.errno === 1452 ? ['Cashier not found'] : err)
      })
  },
  updateMoneyCase: (req, res) => {
    const {
      invoice,
      idUser,
      isMember,
      orders,
      purchaseAmount,
      initialPrice,
      priceAmount,
      paymentType,
      moneycaseamount
    } = req.body

    const newMoneyCase = {
      invoice,
      idUser,
      isMember: isMember ? isMember : 0,
      orders,
      purchaseAmount,
      initialPrice,
      priceAmount,
      paymentType,
      moneycaseamount
    }
    const id = req.params.id
    MoneyCaseModels.updateMoneyCase(newMoneyCase, id)
      .then(response => {
        MoneyCaseModels.getMoneyCaseById(id)
          .then(async response => {
            await new Promise(resolve => setTimeout(resolve, 5000));
            const resultMoneyCase = response[0]
            helpers.response(res, resultMoneyCase, res.statusCode, helpers.status.update, null)
          }).catch(err => {
            helpers.response(res, [], err.statusCode, null, null, err)
          })
      }).catch(err => {
        helpers.response(res, [], err.statusCode, null, null, err.errno === 1452 ? ['Cashier not found'] : err)
      })
  },
  deleteMoneyCase: (req, res) => {
    const id = req.params.id
    MoneyCaseModels.deleteMoneyCase(id)
      .then(response => {
        const resultMoneyCase = response
        helpers.redisInstance().del('getAllMoneyCases')
        helpers.redisInstance().del('getMyMoneyCases')
        helpers.response(res, resultMoneyCase, res.statusCode, helpers.status.delete, null)
      }).catch(err => {
        helpers.response(res, [], err.statusCode, null, null, err)
      })
  },
  getMoneyCaseById: (req, res) => {
    const id = req.params.id
    MoneyCaseModels.getMoneyCaseById(id)
      .then(response => {
        const resultMoneyCase = response
        helpers.response(res, resultMoneyCase, res.statusCode, helpers.status.found, null)
      }).catch(err => {
        helpers.response(res, [], err.statusCode, null, null, err)
      })
  },
  updateCaseStatus: (req, res) => {
    const {
      status 
    } = req.body
    const newStatus = {
      status
    }
    MoneyCaseModels.updateCaseStatus(newStatus)
      .then(response => {
           const resultCaseStatus = response
            helpers.response(res, resultCaseStatus, res.statusCode, helpers.status.update, null)
      }).catch(err => {
        helpers.response(res, [], err.statusCode, null, null, err)
      })
  },
}
module.exports = MoneyCase