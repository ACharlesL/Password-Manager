'use strict'

const showPassportsTemplate = require('../templates/passport-listing.handlebars')

const getPassportsSuccess = (data) => {
  console.log(data)
  const showPassportsHtml = showPassportsTemplate({ passports: data.passports })
  $('.content').html(showPassportsHtml)
}

const clearBooks = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getBooksSuccess,
  clearBooks,
  failure
}
