'use strict'

const store = require('../store.js')
// const api = require('./api.js')
// const showRecipesTemplate = require('../templates/get-all-recipes.handlebars')
// const showOneRecipeTemplate = require('../templates/get-one-recipe.handlebars')
// const getFormFields = require(`../../../lib/get-form-fields`)

const signUpSuccess = (data) => {
  console.log(data + 'sign-up success')
}

const signUpFailure = (error) => {
  console.log('signup fail ', error)
}

const signInSuccess = (data) => {
  console.log('sign in success')
  store.user = data.user
}

const signInFailure = (error) => {
  console.error('signin fail ', error)
}

const signOutSuccess = (data) => {
  console.log('sign out success')
}

const signOutFailure = (error) => {
  console.error('sign out fail ', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
