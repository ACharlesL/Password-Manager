'use strict'

// const store = require('../store.js')
const passportsTemplate = require('../templates/passports.handlebars')

const store = require('../store.js')
// const map = require('./map.js')

const createPassportSuccess = (response) => {
  $('#user-messages').html('')
  const output = (`
    <h4> Created! </h4>
    `)
  $('#user-message').html(output)
  $('#createPassportModal').modal('hide')
  $('#add-passport-form').trigger('reset')
  // console.log(response) // TODO: Remove // console.log from production
}

const showPassportSuccess = (response) => {
  console.log("in showPassportSuccess UI")
  const passportsHTML = passportsTemplate({passports: response.passports})
  $('#show-passports-section').html(passportsHTML)
   console.log(response.passports)
  //  map.deleteAllMarkers()
  store.passports = {}
  response.passports.forEach((passport) => { // Store passports with key of _id
    store.passports[passport._id] = passport
  })
  console.log(store.passports[passport._id])
  return response.passports
}

const passportUpdateSuccess = (response) => {
  const output = (`
    <h3>Update Passport Success</h3>
    `)
  $('#updatepPassportModal').modal('hide')
  $('#user-message').html(output)
  $('#update-passport-form').trigger('reset')
  $('#update-passport-box').hide()
}

const passportFailure = (response) => {
  $('#user-message').html('')
  const output = (`
    <h3>ERROR: Failed to Passport</h3>
    `)
  $('#user-message').html(output)
}

const passportDeleteFailure = (response) => {
  $('#user-message').html('')
  const output = (`
    <h3>ERROR: Failed to delete Passport</h3>
    `)
  $('#user-message').html(output)
}

const passportUpdateFailure = (response) => {
  const output = (`
    <h3>ERROR: Failed to update Passport</h3>
    `)
  $('#user-message').html(output)
  $('#update-passport-box').trigger('reset')
}

// // console.log($('span[button id="'passport._id-edit'"]')

module.exports = {
  createPassportSuccess,
  showPassportSuccess,
  passportFailure,
  passportDeleteFailure,
  passportUpdateFailure,
  passportUpdateSuccess
}
