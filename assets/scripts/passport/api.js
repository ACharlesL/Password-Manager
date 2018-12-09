'use strict'

const config = require('../config')
const store = require('../store.js')


const createPassport = function (currentData) {
  return $.ajax({
    url: config.apiUrl + '/passports',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data: currentData
  })
}

const getPassports = function () {
  return $.ajax({
    url: config.apiUrl + '/passports',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}


const deletePassport = (passportId) => {
  return $.ajax({
    url: config.apiUrl + '/passports/' + passportId,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

const updatePassport = (updatedPassport) => {
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

module.exports = {
  createPassport,
  getPassports,
  deletePassport,
  updatePassport
}
