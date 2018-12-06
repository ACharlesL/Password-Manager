'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = function (userData) {
//  console.log('in sign up api')
  return $.ajax({
    url: config.apiUrl + 'sign-up',
    method: 'POST',
    data: userData
  })
}

const signIn = function (userData) {
//  console.log('in sign in api')
  return $.ajax({
    url: config.apiUrl + 'sign-in',
    method: 'POST',
    data: userData
  })
}

const changePassword = function (passwordData) {
  // console.log('change pass data ' + passwordData)
  return $.ajax({
    url: config.apiUrl + 'change-password',
    headers: {
    // 'Content-type': 'application/json',
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: passwordData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + 'sign-out',
    headers: {
    // 'Content-type': 'application/json',
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword

}
