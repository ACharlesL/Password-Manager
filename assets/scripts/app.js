const authEvents = require('./auth/events.js')
const passportEvents = require('./passport/events.js')
// const fridgeEvents = require('./fridge/events.js')

// const ingredientEvents = require('./ingredient/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // fridgeEvents.addHandlers()
  passportEvents.addHandlers()
  authEvents.addHandlers()
})
