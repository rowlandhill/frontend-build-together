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
  console.log('sign in data is ', data.user.id)
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

const createProjectSuccess = (data) => {
  console.log('createProjectSuccess is ', data)
  $('#createProjectContent').text(data.project.title + ', ' + data.project.body)
  console.log('project_id is ', data.project.project_id)
  console.log('user_id is ', data.project.user.id)
}

const createProjectFailure = (error) => {
  console.error('createProjectFailure is ', error)
}

const createTaskSuccess = (data) => {
  console.log('createTaskSuccess is ', data)
  $('#createTaskContent').text(data.tasks.name + ', ' + data.tasks.description)
}

const createTaskFailure = (error) => {
  console.error('createTaskFailure is ', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  createProjectSuccess,
  createProjectFailure,
  createTaskSuccess,
  createTaskFailure
}
