'use strict'

// const store = require('../store.js')
 const passportsTemplate = require('../templates/passports.handlebars')
const showPassportsTemplate = require('../templates/newPassport.handlebars')

const store = require('../store.js')
// const map = require('./map.js')

const passportCreateSuccess = function (response) {
  $('#display-message').html('content created')
  $('#display-message').css('color', 'green')
}

const getPassportsSuccess = (data) => {
//  console.log('in ui before handlebars')
//  console.log(data.fridges[0])
//  console.log(data)
//  console.log(store.user.id)
  console.log("in get pass ui")
  const showPassportsHtml = passportsTemplate({ passports: data.passports })
  $('.content').html(showPassportsHtml)
  // const showFridgesHtml = showFridgesTemplate({ fridges: data.fridges })
  // $('.content').html(showFridgesHtml)
}

const updatePassportsSuccess = function (response) {
  $('#display-message').html('content updated')
  $('#display-message').css('color', 'green')
}

const passportDeleteSuccess = function (response) {
  $('#display-message').html('content deleted')
  $('#display-message').css('color', 'green')
}

const passportDeletefailure = function (response) {
  $('#display-message').html('delete fail')
  $('#display-message').css('color', 'red')
}

const passportUpdateSuccess = function (response) {
  $('#display-message').html('content updated')
  $('#display-message').css('color', 'green')
}

const passportUpdatefailure = function (response) {
  $('#display-message').html('update failed')
  $('#display-message').css('color', 'red')
}



// const passportFailure = (response) => {
//   $('#user-message').html('')
//   const output = (`
//     <h5>ERROR: Failed to Passport</h5>
//     `)
//   $('#user-message').html(output)
// }
//
// const passportDeleteFailure = (response) => {
//   $('#user-message').html('')
//   const output = (`
//     <h3>ERROR: Failed to delete Passport</h3>
//     `)
//   $('#user-message').html(output)
// }
//
// const passportUpdateFailure = (response) => {
//   const output = (`
//     <h3>ERROR: Failed to update Passport</h3>
//     `)
//   $('#user-message').html(output)
//   $('#update-passport-box').trigger('reset')
// }

// // console.log($('span[button id="'passport._id-edit'"]')

module.exports = {
  passportCreateSuccess,
  getPassportsSuccess,
  passportDeleteSuccess,
  passportDeletefailure,
  passportUpdateSuccess,
  passportUpdatefailure,
  updatePassportsSuccess,
  // passportFailure
}
