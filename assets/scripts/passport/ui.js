'use strict'

const showPassportsTemplate = require('../templates/passport-listing.handlebars')

const getPassportsSuccess = (data) => {
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
  console.log('new passport success')
  // store.user = response.user
  $('#create-passport-form').trigger('reset')
  $('#create-passport-form').addClass('hidden')
  $('#display-message').html('passport created')
  $('#display-message').css('color', 'green')
}

// UPDATE passport form show
const showUpdatePassportForm = function () {
  $('#update-passport-form').removeClass('hidden')
}
// update passport
const updatePassportSuccess = function (response) {
  console.log('passport updated')
  // store.user = response.user
  $('#update-passport-form').trigger('reset')
  $('#update-passport-form').addClass('hidden')
  $('#display-message').html('passport created')
  $('#display-message').css('color', 'green')
}

const cancel = function (){
  $('#create-passport-form').trigger('reset')
  $('#create-passport-form').addClass('hidden')
}

module.exports = {
  getPassportsSuccess,
  clearPassports,
  showCreatePassportForm,
  createPassportSuccess,
  showUpdatePassportForm,
  updatePassportSuccess,
  cancel,
  failure
}
