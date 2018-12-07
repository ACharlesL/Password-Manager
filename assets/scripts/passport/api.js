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

const updatePassport = (updatedPassport, id) => {
  // const updateId = store.updateid
  // // console.log(store.updateid)
  console.log('in updatePassport api')
  console.log(updatedPassport.passport.title)
  return $.ajax({
    url: config.apiUrl + '/passports/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: updatedPassport.passport
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
