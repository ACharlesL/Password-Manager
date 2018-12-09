'use strict'

const showPassportsTemplate = require('../templates/passport-listing.handlebars')

const getPassportsSuccess = (data) => {
  $('#create-passport-form').trigger('reset')
  $('#create-passport-form').addClass('hidden')
  console.log(data)

  const showPassportsHtml = showPassportsTemplate({ passports: data.passports })
  $('.content').html(showPassportsHtml)
}

const clearPassports = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

// PASSPORT FORMS
const showCreatePassportForm = function () {
  $('#create-passport-form').removeClass('hidden')
}
// create passport
const createPassportSuccess = function (response) {
//  console.log('new password success')
  // store.user = response.user
  $('#create-passport-form').trigger('reset')
  $('#create-passport-form').addClass('hidden')
  $('#display-message').html('passport created')
  $('#display-message').css('color', 'green')
  $('#create-passport-form').trigger('reset')
}

module.exports = {
  getPassportsSuccess,
  clearPassports,
  showCreatePassportForm,
  failure
}
