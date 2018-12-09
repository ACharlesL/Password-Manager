'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

// GET All passports
const onGetPassports = (event) => {
  event.preventDefault()
  api.getPassports()
    .then(ui.getPassportsSuccess)
    .catch(ui.failure)
}

// Create Passports
const onCreatePassports = (event) => {
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
const onDeleteBook = (event) => {
  event.preventDefault()
  const bookId = $(event.target).closest('section').data('id')
  if (confirm('Are you sure')) {
    api.deleteBook(bookId)
      .then(() => onGetBooks(event))
      .catch(ui.failure)
  }
}
const addHandlers = () => {
  $('#getPassportsButton').on('click', onGetPassports)
  $('#createPassportButton').on('click', onCreatePassports)
  $('#clearBooksButton').on('click', onClearBooks)
  $('.content').on('click', 'button', onDeleteBook)

}

module.exports = {
  addHandlers
}
