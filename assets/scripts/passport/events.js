'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreatePassport = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log("in create passport")
  console.log(data)
  // // console.log(data)
  //data.passport.checked = false // Always create an passport with false for checked status
  api.createPassport(data)
    .then(ui.passportCreateSuccess)
    .then(showPassports)
    .catch(ui.passportFailure)
}


const onGetPassports = (event) => {
  console.log("in get pass")
  event.preventDefault()
  api.showPassport()
    .then(ui.getPassportsSuccess)
    .catch(ui.failure)
}

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
    .then(ui.updatePassportsSuccess)
    .catch(ui.failure)
}

// Delete passport
const onDeletePassport = (event) => {
  event.preventDefault()
  // console.log('in delete ingrid')
  const PassportId = $(event.target).closest('section').data('id')
  api.deletePassport(PassportId)
    .then(() => onGetPassports(event))
    .catch(ui.failure)
}


const showPassports = () => {
  api.showPassports()
    .then(ui.showPassportsSuccess)
    .then(onGetPassports)
    .catch(ui.passportFailure)
}
// const showPassports = () => {
//   console.log("in showPass event")
//   api.showPassport()
//     .then(ui.showPassportSuccess)
//     .then(handlePassports)
//     .catch(ui.passportFailure)
// }

module.exports = {
  onCreatePassport,
  onUpdatePassport,
  onDeletePassport,
  onGetPassports
}
