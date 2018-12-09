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

// Create Passports
const onCreatePassport = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
//  console.log(data)
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
  api.createPassport(newPassport)
    .then(ui.getPassportsSuccess)
    .catch(ui.failure)
}

const onClearBooks = (event) => {
  event.preventDefault()
  ui.clearBooks()
}

const onDeletePassport = (event) => {
  event.preventDefault()
  const passportId = $(event.target).closest('section').data('id')
  if (confirm('Are you sure')) {
    api.deletePassport(passportId)
      .then(() => onGetPassport(event))
      .catch(ui.failure)
  }
}
const addHandlers = () => {
  $('#getPassportsButton').on('click', onGetPassports)
  $('#createPassportButton').on('click', createPassportform)
  $('#clearBooksButton').on('click', onClearBooks)
  $('.content').on('click', 'button', onDeleteBook)
  $('#create-passport-form').on('submit', onCreatePassport)

}

module.exports = {
  addHandlers
}
