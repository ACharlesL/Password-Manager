'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const passportEvents = require('./passport/events.js')


$(() => {
  addEventListeners()
  setDefaultState()
})

const addEventListeners = () => {

  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)

  $('#add-passport-form').on('submit', passportEvents.onCreatePassport)
  //  update passport event handlers
  $('#update-passport-form').on('submit', passportEvents.onUpdatePassport)
  $('#getPassportsButton').on('click', passportEvents.onGetPassports)
  $('.content').on('click', 'button', passportEvents.onGetPassports)
  $('#update-ingredient-form').on('submit', passportEvents.onUpdateIngredient)
  $('#editPassportsButton').on('click', passportEvents.onUpdateIngredient)

  $('#editPassportsButton').on('click', () => {
    console.log("edit button")
    $('#update-passport-form').show()
  })

  $('#cancel-update-button').on('click', () => {
    $('#update-passport-box').hide()
    $('#update-passport-form').trigger('reset')
   })

  $('#show-sign-in-button').on('click', () => {
    console.log("in sign in app.js")
    $('#sign-in-box').show()
  })
  $('#cancel-sign-in-button').on('click', () => {
    $('#sign-in-box').hide()
    $('#sign-in-form').trigger('reset')
  })

  $('#show-sign-up-button').on('click', () => {
    $('#sign-up-box').show()
  })
  $('#cancel-sign-up-button').on('click', () => {
    $('#sign-up-box').hide()
    $('#sign-up-form').trigger('reset')
  })
  $('#show-change-password-button').on('click', () => {
    $('#change-password-box').show()
  })
  $('#cancel-change-password-button').on('click', () => {
    $('#change-password-box').hide()
    $('#change-password-form').trigger('reset')
  })

  $('#show-create-button').on('click', () => {
    $('#add-passport-box').show()
  })
  //

  $('#close-create-article').on('click', () => {
    $('#add-passport-form').trigger('reset')
  })

  $('#cancel-update-button').on('click', () => {
    $('#update-passport-form').trigger('reset')
  })

}
const setDefaultState = () => {
  $('#authenticated-buttons').hide()
  $('#sign-in-box').hide()
  $('#sign-up-box').hide()
  $('#change-password-box').hide()
  $('#passport-control-buttons').hide()
  $('#add-passport-box').hide()
  $('#update-passport-box').hide()
  $('#add-NewPassport-box').hide()
  $('#update-passport-form').hide()
}
