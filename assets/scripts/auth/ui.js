'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#display-message').html('Sign up successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}
const signUpFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}
const signInSuccess = function (response) {
  $('#display-message').html('Sign in successful')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  // console.log('store before adding user key', store)
  store.user = response.user
  // console.log('store after adding user key', store)
  // console.log('store.user.token', store.user.token)

  // show button on sign in
  $('#change-password-button').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#createPassportButton').removeClass('hidden')

  
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')

  $('.navigation').removeClass('hidden')
  $('.fridge').removeClass('hidden')
  $('.ingredient').removeClass('hidden')
  $('.delete-fridge-form').removeClass('hidden')

  $('#view-games-button').addClass('unhide')
  $('#player-logged-on').removeClass('hidden')
  $('#player-logged-on').html(`${store.user.email} logged in`)
  // console.log('sign in')
  // $('#gameBoard').addClass('unhide')
  // Passport forms
  // $('.gameBoard').addClass('hidden')
}
const signInFailure = function () {
  console.log("in sign in ui fail")
  // missing the l in html

  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}
const signOutSuccess = function () {
  $('.fridge').addClass('hidden')
  $('.ingredient').addClass('hidden')
  $('.navigation').addClass('hidden')
  $('.content').addClass('hidden')

  // hide buttons
  $('#sign-out-button').addClass('hidden')
  $('#change-password-button').addClass('hidden')


  $('#display-message').html('Sign Out successful')
  $('#display-message').css('color', 'green')
  $('#new-game-button').removeClass('unhide')
  $('#view-games-button').removeClass('unhide')
  $('#change-password-form').removeClass('unhide')
  $('#Stats-message').addClass('hidden')
  $('#player-logged-on').addClass('hidden')
  // console.log('sign out')
}
const signOutFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}



 // AUTH FORMS
const showSignInForm = function () {
  $('#sign-in-form').removeClass('hidden')
}
const showChangePasswordForm = function () {
  $('#change-password-form').removeClass('hidden')
}

const createGamesuccess = function (response) {
//  console.log(response)
}
const userGames = function (response) {
//  console.log('in UI games')
  store.games = response
//  console.log(response)
}

const changePasswordFailure = function () {
  $('#display-message').html('unable to change password')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}
const changePasswordSuccess = function (response) {
//  console.log('new password success')
  // store.user = response.user
  $('#change-password-form').trigger('reset')
  $('#change-password-form').addClass('hidden')
  $('#display-message').html('Password changed')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  createGamesuccess,
  userGames,
  changePasswordSuccess,
  changePasswordFailure,
  showSignInForm,
  showChangePasswordForm
}
