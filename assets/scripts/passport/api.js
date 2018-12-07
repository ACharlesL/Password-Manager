'use strict'

const store = require('../store.js')
const config = require('../config.js')

const createPassport = function (currentData) {
//  console.log('in api')
  return $.ajax({
    url: config.apiUrl + '/passports',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data: currentData
  })
}

const showPassport = (data) => {
  console.log('in showpassport api')
  return $.ajax({
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    url: config.apiUrl + '/passports',
    method: 'GET'
  })
}

const updatePassport = (updatedPassport) => {
  // const updateId = store.updateid
  // // console.log(store.updateid)
  const updateId = store.updateid
  return $.ajax({
    url: config.apiUrl + '/passports/' + updateId,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: updatedPassport
  })
}

const deletePassport = function (id) {
  return $.ajax({
    url: config.apiUrl + '/passports/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
module.exports = {
  createPassport,
  showPassport,
  deletePassport,
  updatePassport
}