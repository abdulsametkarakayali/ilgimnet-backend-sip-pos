const queryHelper = require('../helpers/query')

const MoneyCase = {
  getAllMoneyCase: () => {
    return queryHelper('SELECT * FROM moneycase order by Id DESC')
  },
  getLastInsertId: () => {
    return queryHelper('SELECT id FROM moneycase  order by Id desc limit 1;')
  },
  getCaseStatus: () => {
    return queryHelper('SELECT * FROM casestatus')
  },
  getMyMoneyCase: (order, id) => {
    return queryHelper(`SELECT histories.*, users.name as cashier FROM histories JOIN users WHERE histories.idUser = users.id AND isMember = ${id} ORDER BY id ${!order ? 'desc' : order}`)
  },
  insertMoneyCase: (newMoneyCase) => {
    return queryHelper('INSERT INTO moneycase SET ?', newMoneyCase)
  },
  updateCaseStatus: (newStatus) => {
    return queryHelper('UPDATE casestatus	SET ? WHERE id = 1',newStatus)
  },
  deleteMoneyCase: (id) => {
    return queryHelper('DELETE FROM moneycase WHERE id = ?', id)
  },
  getMoneyCaseById: (id) => {
    return queryHelper('SELECT * FROM moneycase WHERE id = ?', id)
  }
}

module.exports = MoneyCase