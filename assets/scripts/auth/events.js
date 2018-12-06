'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  //  console.log('in sign up event')
  event.preventDefault()
  const data = getFormFields(event.target)
  //  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('change password ran')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignIn = function (event) {
  // alert('it works')
  //  console.log('in sign in event')
  event.preventDefault()
  const data = getFormFields(event.target)
  //  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onSignOut = function (event) {
  // alert('it works')
  const data = getFormFields(event.target)
  event.preventDefault()
  //  console.log('sign out ran')
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

$(document).ready(function () {
  $('#myBtn').click(function () {
    $('#myModal').modal()
  })
})

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-out-button').on('click', onSignOut)
  $('#Change-password-form').on('submit', onChangePassword)
}
module.exports = {
  addHandlers
}
