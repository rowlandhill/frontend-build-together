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

const onCreateProject = function (event) {
  console.log('createProject fired')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createProject(data)
    .then(ui.createProjectSuccess)
    // .then(api.createTask(data))
    //   .then(ui.createTaskSuccess)
    //   .catch(ui.createTaskFailure)
      .catch(ui.createProjectFailure)
}

const onCreateTask = function (event) {
  console.log('createTask fired')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createTask(data)
    .then(ui.createTaskSuccess)
    .catch(ui.createTaskFailure)
}

const onGetAllProjects = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getAllProjects(data)
    .then(ui.getAllProjectsSuccess)
    .catch(ui.getAllProjectsFailure)
}

const onGetAllTasks = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getAllTasks(data)
    .then(ui.getAllTasksSuccess)
    .catch(ui.getAllTasksFailure)
}

const onGetProject = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('onGetProject data is ', data)
  console.log('data.project.id is ', data.project.id)
  api.getProject(data)
    .then(ui.getProjectSuccess)
    .catch(ui.getProjectFailure)
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

const appendCreateTask = (event) => {
  event.preventDefault()
  $("<div class='form-group'><input class='form-control' type='text' name='task[name]' placeholder='task name'></div><div class='form-group'><textarea class='form-control' name='task[description]' rows='3' placeholder='add description here'></textarea></div>").appendTo('#createTasks')
}

<<<<<<< HEAD
const showCreateProject = (event) => {
  event.preventDefault()
  $('#create-project-body').removeClass('hidden')
  $('.getAllProjectsContent').empty()
  $('.getProjectContent').empty()
  $('#getNewProjectContent').empty()
  $('#create-task-body').addClass('hidden')
  document.getElementById('createProject').reset()
}

=======
>>>>>>> appendCreateTask
const addHandlers = () => {
  $('#register-form').on('submit', onSignUp)
  $('#login-form').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password-form').on('submit', onChangePassword)
  $('#createProject').on('submit', onCreateProject)
  $('#createTasks').on('submit', onCreateTask)
  $('#add-task').on('click', appendCreateTask)
  $('#get-all-projects').on('click', onGetAllProjects)
  $('#get-all-tasks').on('click', onGetAllTasks)
  $('#getProject').on('submit', onGetProject)
<<<<<<< HEAD
  $('#new-project-reveal-button').on('click', showCreateProject)
  $('#go-to-new-project').on('submit', onGetProject)
=======
>>>>>>> appendCreateTask
}

module.exports = {
  addHandlers
}
