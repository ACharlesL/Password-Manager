'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreatePassport = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // // console.log(data)
  //data.passport.checked = false // Always create an passport with false for checked status
  api.createPassport(data)
    .then(ui.createPassportSuccess)
    .then(showPassports)
    .catch(ui.passportFailure)
}

const onClickCheckbox = (id) => {
  store.passports[id].checked = !store.passports[id].checked
  const current = store.passports[id]

  const updatedPassport = {
    'passport': {
      'title': current.title,
      'email': current.email,
      'cred': current.cred,
      'url': current.url,
      'contact': current.contact,
      'note': current.note
    }
  }

  api.updatePassport(updatedPassport, id)
    .then(ui.passportUpdateSuccess)
    .then(showPassports)
    .catch(ui.passportUpdateFailure)
}

const onClickEdit = (id) => {
  event.preventDefault()
  store.updatePassportId = id
  // // console.log(store.updatePassportId)

  $('#update-passport-box').show()

// current passport being updated
}

const onClickShow = (id) => {
  console.log("in show button")
  event.preventDefault()
  store.updatePassportId = id
  // // console.log(store.updatePassportId)

  $('#update-passport-box').show()

// current passport being updated
}

const onUpdatePassport = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)

  // current passport being updated
  //  // console.log(store.updateid)
  const updatedPassport = {
    'passport': {
      'title': current.title,
      'email': current.email,
      'cred': current.cred,
      'url': current.url,
      'contact': current.contact,
      'note': current.note
    }
  }

  // console.log(updatedPassport)
  api.updatePassport(updatedPassport, store.updatePassportId)
    .then(ui.passportUpdateSuccess)
    .then(showPassports)
    .catch(ui.passportUpdateFailure)
}

const onClickDelete = (id) => {
  event.preventDefault()
  // console.log(id)
  api.deletePassport(id)
    .then(showPassports)
    .catch(ui.passportDeleteFailure)
}

const handlePassports = (passports) => {
  store.passports = {}
  console.log("in handlePass")
  passports.passports.forEach((passport) => {
    $(`#${passport._id}-show`).on('click', () => {
      onClickShow(passport._id)
    })
    $(`#${passport._id}-edit`).on('click', () => {
      onClickEdit(passport._id)
    })
    $(`#${passport._id}-delete`).on('click', () => {
      onClickDelete(passport._id)
    })
    store.passports[passport._id] = passport
  })
}

const showPassports = () => {
  console.log("in showPass event")
  api.showPassport()
    .then(ui.showPassportSuccess)
    .then(handlePassports)
    .catch(ui.passportFailure)
}

module.exports = {
  onCreatePassport,
  showPassports,
  onUpdatePassport
}
