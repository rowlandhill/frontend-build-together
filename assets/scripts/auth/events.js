const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  console.log('signup fired')
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  console.log('signin fired')
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  console.log('pass change')
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  console.log('signout fired')
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

$(function () {
  $('#login-form-link').click(function (e) {
    $('#login-form').delay(100).fadeIn(100)
    $('#register-form').fadeOut(100)
    $('#register-form-link').removeClass('active')
    $(this).addClass('active')
    e.preventDefault()
  })
  $('#register-form-link').click(function (e) {
    $('#register-form').delay(100).fadeIn(100)
    $('#login-form').fadeOut(100)
    $('#login-form-link').removeClass('active')
    $(this).addClass('active')
    e.preventDefault()
  })
})

const addHandlers = () => {
  $('#register-form').on('submit', onSignUp)
  $('#login-form').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password-form').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
