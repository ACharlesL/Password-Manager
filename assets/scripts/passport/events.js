'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

// GET All passports
const onGetPassports = (event) => {
  event.preventDefault()
  api.getPassports()
    .then(ui.getPassportsSuccess)
    .catch(ui.failure)
}

// get passport form
const createPassportform = function (event) {
  console.log("in show create form")
  ui.showCreatePassportForm()
}

// Create Passports POST
const onCreatePassport = function (event) {
  console.log('in create event')
  event.preventDefault()
  const data = getFormFields(event.target)
  const newPassport = {
    'passport': {
      'title': data.title,
      'email': data.email,
      'cred': data.cred,
      'url': data.url,
      'contact': data.contact,
      'note': data.note
    }
  }
  console.log(newPassport)
  api.createPassport(newPassport)
    .then(ui.createPassportSuccess)
    .catch(ui.failure)
}

// Show update form
const updatePassportform = function (event) {
  console.log("in update form")
  ui.showUpdatePassportForm()
}

// PATCH update passport
const onUpdatePassport = (event) => {
//  console.log('in update')
  event.preventDefault()
  const data = getFormFields(event.target)
//  console.log(data)
  store.updateid = data.id
  const updatedPassport = {
    'passport': {
      'title': data.title,
      'email': data.email,
      'cred': data.cred,
      'url': data.url,
      'contact': data.contact,
      'note': data.note
    }
  }
  api.updatePassport(updatedPassport)
    .then(ui.updatePassportSuccess)
    .catch(ui.failure)
}

// Delete Passport DELETE
const onDeletePassport = (event) => {
  console.log("in delete passport")
  event.preventDefault()
  const passportId = $(event.target).closest('section').data('id')
  if (confirm('Are you sure')) {
    api.deletePassport(passportId)
      .then(() => onGetPassports(event))
      .catch(ui.failure)
  }
}

const onCancel = (event) => {
  console.log("in cancel")
  ui.cancel()
}
const addHandlers = () => {
  $('.content').on('click', 'button', onDeletePassport)
  $('#create-passport-form').on('submit', onCreatePassport)
  $('#cancel').on('click', onCancel)
  $('#update-passport-form').on('submit', onUpdatePassport)
  $('#getPassportsButton').on('click', onGetPassports)
  $('#createPassportButton').on('click', createPassportform)
  $('#updatePassportButton').on('click', updatePassportform)
  $('#clearPassportsButton').on('click', onClearPassports)
}

module.exports = {
  addHandlers
}
