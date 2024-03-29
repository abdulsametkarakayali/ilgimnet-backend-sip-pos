const queryHelper = require('../helpers/query')

const history = {
  getAllHistory: (order) => {
    return queryHelper(`SELECT histories.*, users.name as cashier FROM histories JOIN users WHERE histories.idUser = users.id ORDER BY id ${!order ? 'desc' : order}`)
  },
  getBestSellingToday: (id) => {
    return queryHelper('select * , sum(quantity) as salestotal  from  orderdetails o INNER JOIN histories h on o.orderDetailID  = h.id where  (h.paymentType = 0 or  h.paymentType = 1) and h.shiftId ='+' '+id +' '+'group by o.productID order by salestotal desc')
  },
  getMyHistory: (order, id) => {
    return queryHelper(`SELECT histories.*, users.name as cashier FROM histories JOIN users WHERE histories.idUser = users.id AND isMember = ${id} ORDER BY id ${!order ? 'desc' : order}`)
  },
  insertHistory: (newHistory) => {
    return queryHelper('INSERT INTO histories SET ?', newHistory)
  },
  insertOrderDetails: (newOrderList) => {
    return queryHelper('INSERT INTO orderdetails SET ?', newOrderList)
  },
  updateHistory: (newHistory, id) => {
    return queryHelper('UPDATE histories SET ? WHERE id = ?', [newHistory, id])
  },
  deleteHistory: (id) => {
    return queryHelper('DELETE FROM histories WHERE id = ?', id)
  },
  getHistoryById: (id) => {
    return queryHelper('SELECT * FROM histories WHERE id = ?', id)
  }
}

module.exports = history