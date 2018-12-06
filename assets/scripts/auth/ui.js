'use strict'

const store = require('../store.js')

// const signUpSuccess = function () {
//   $('#display-message').html('Sign up successful')
//   $('#display-message').css('color', 'green')
//   $('#sign-up-form').trigger('reset')
// }
  const signUpSuccess = (response) => {
    $('#user-messages').html('')
    const userHTML = (`
      <h4> New User: ${response.user.email}</h4>
      `)
    $('#user-message').html(userHTML)
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
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#signInModal').addClass('hidden')
  $('#Change-password-form').removeClass('hidden')

  $('.navigation').removeClass('hidden')
  $('.fridge').removeClass('hidden')
  $('.ingredient').removeClass('hidden')
  $('.delete-fridge-form').removeClass('hidden')

  $('#view-games-button').addClass('unhide')
  $('#Change-password-form').addClass('unhide')
  $('#player-logged-on').removeClass('hidden')
  $('#player-logged-on').html(`${store.user.email} logged in`)
  // console.log('sign in')
  // $('#gameBoard').addClass('unhide')

  // $('.gameBoard').addClass('hidden')
}
const signInFailure = function () {
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

  $('#display-message').html('Sign Out successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#Change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#gameBoard').removeClass('unhide')
  // $('#new-game-button').hide()
  $('#new-game-button').removeClass('unhide')
  $('#sign-out-button').removeClass('unhide')
  $('#view-games-button').removeClass('unhide')
  $('#Change-password-form').removeClass('unhide')
  $('#Stats-message').addClass('hidden')
  $('#player-logged-on').addClass('hidden')
  // console.log('sign out')
}
const signOutFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
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
  $('#Change-password-form').trigger('reset')
}
const changePasswordSuccess = function (response) {
//  console.log('new password success')
  // store.user = response.user
  $('#Change-password-form').addClass('hidden')
  $('#display-message').html('Password changed')
  $('#display-message').css('color', 'green')
  $('#Change-password-form').trigger('reset')
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
  changePasswordFailure
}
