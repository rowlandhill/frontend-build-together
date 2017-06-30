'use strict'

const store = require('../store.js')
const api = require('./api.js')
const showProjectsTemplate = require('../templates/get-all-projects.handlebars')
const showOneProjectTemplate = require('../templates/get-one-project.handlebars')
<<<<<<< HEAD
const showNewProjectTemplate = require('../templates/new-project.handlebars')

=======
>>>>>>> appendCreateTask
const getFormFields = require(`../../../lib/get-form-fields`)

const signUpSuccess = (data) => {
  console.log(data + 'sign-up success')
  clearForms()
}

const signUpFailure = (error) => {
  console.log('signup fail ', error)
}

const clearForms = () => {
  document.getElementById('createProject').reset()
  document.getElementById('getProject').reset()
  // document.getElementById('createTasks').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('login-form').reset()
  document.getElementById('register-form').reset()
}

const signInSuccess = (data) => {
  console.log('sign in success')
  store.user = data.user
  console.log('sign in data is ', data.user.id)
  clearForms()
  $('#registration').addClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#change-password-modal-button').removeClass('hidden')
  $('#new-project-reveal-button').removeClass('hidden')
  $('#get-all-projects').removeClass('hidden')
}

const signInFailure = (error) => {
  console.error('signin fail ', error)
}

const changePasswordSuccess = (response) => {
  console.log(response)
  clearForms()
}

const changePasswordFailure = (error) => {
  console.log(error)
}

const signOutSuccess = (data) => {
  console.log('sign out success')
  clearForms()
  $('#registration').removeClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#change-password-modal-button').addClass('hidden')
  $('#new-project-reveal-button').addClass('hidden')
  $('#get-all-projects').addClass('hidden')
  $('.getAllProjectsContent').empty()
  $('#create-project-body').addClass('hidden')
  $('#getNewProjectContent').empty()
  $('#getProjectContent').empty()
}

const signOutFailure = (error) => {
  console.error('sign out fail ', error)
}

const onUpdateProject = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const newProject = $(event.target).attr('data-id')
  console.log('event.target is ' + data)
  console.log('newProject is ', newProject)
<<<<<<< HEAD
<<<<<<< HEAD
  $('.updateProject').trigger('reset')
  refreshProjects()
  api.updateProject(data, newProject)
    .then(updateProjectSuccess)
    .catch(updateProjectFailure)
}

const onUpdateTask = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const newTask = $(event.target).attr('data-id')
  console.log('event.target is ' + data)
  console.log('newProject is ', newTask)
  $('.updateProject').trigger('reset')
  refreshProjects()
  api.updateTask(data, newTask)
    .then(updateProjectSuccess)
    .catch(updateTaskFailure)
}

const refreshProjects = (data) => {
  const showProjectHtml = showProjectsTemplate({ projects: store.projectList })
  $('.getAllProjectsContent').empty()
  $('.getAllProjectsContent').append(showProjectHtml)
  $('.updateProject').on('submit', onUpdateProject)
  $('.destroyProject').on('click', onDeleteProject)
  $('.destroyTask').on('click', onDeleteTask)
}

// const refreshProject = (data) => {
//   const showOneProjectHtml = showOneProjectTemplate({ project: store.singleProject })
//   $('.getAllProjectsContent').empty()
//   $('.getAllProjectsContent').append(showOneProjectHtml)
//   $('.updateProject').on('submit', onUpdateProject)
//   $('.destroyProject').on('click', onDeleteProject)
//   $('.destroyTask').on('click', onDeleteTask)
// }

=======
  $('.update').trigger('reset')
=======
  $('.updateProject').trigger('reset')
>>>>>>> updateTasks
  refreshProject()
  api.updateProject(data, newProject)
    .then(updateProjectSuccess)
    .catch(updateProjectFailure)
    // .then(() => {
    //   api.getProject()
    //     .then(getProjectSuccess)
    //     .catch(getProjectFailure)
    //     .catch(updateProjectFailure)
    // })
}

const onUpdateTask = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const newTask = $(event.target).attr('data-id')
  console.log('event.target is ' + data)
  console.log('newProject is ', newTask)
  $('.updateProject').trigger('reset')
  refreshProject()
  api.updateTask(data, newTask)
    .then(updateProjectSuccess)
    .catch(updateTaskFailure)
    // .then(() => {
    //   api.getProject()
    //     .then(getProjectSuccess)
    //     .catch(getProjectFailure)
    //     .catch(updateProjectFailure)
    // })
}

const refreshProject = (data) => {
  const showProjectHtml = showProjectsTemplate({ projects: store.projectList })
  $('.getAllProjectsContent').empty()
  $('.getAllProjectsContent').append(showProjectHtml)
  $('.updateProject').on('submit', onUpdateProject)
  $('.destroyProject').on('click', onDeleteProject)
  // $('.destroyTask').on('click', onDeleteTask)
}

>>>>>>> appendCreateTask
const createProjectSuccess = (data) => {
  console.log('createProjectSuccess is ', data)
<<<<<<< HEAD
  store.singleProject = data.project
  // $('#createProjectContent').text(data.project.title + ', ' + data.project.body)
  clearForms()
  $('#project-id').val(data.project.id)
  $('#go-to-project').val(data.project.id)
  $('#create-project-body').addClass('hidden')
  const showNewProjectHtml = showNewProjectTemplate({ project: store.singleProject })
  $('#getNewProjectContent').html(showNewProjectHtml)
  $('.create-task-body').removeClass('hidden')
=======
  $('#createProjectContent').text(data.project.title + ', ' + data.project.body)
  $('#project-id').val(data.project.id)
>>>>>>> createTask
  console.log('project_id is ', data.project.id)
  console.log('user_id is ', data.project.user.id)
}

const createProjectFailure = (error) => {
  console.error('createProjectFailure is ', error)
}

const getAllProjectsSuccess = (data) => {
  store.projectList = data.projects
<<<<<<< HEAD
  clearForms()
  $('#getProjectContent').empty()
  $('#create-project-body').addClass('hidden')
  $('#create-task-body').addClass('hidden')
  $('#getNewProjectContent').empty()
  console.log('get all projects success is ', data)
  console.log('store.projectlist data is ', store.projectList)
  refreshProjects(data)
  $('.seeMore').on('submit', onGetSingleProject)
=======
  console.log('get all projects success is ', data)
  $('#getAllProjectsContent').text(data)
  console.log('store.projectlist data is ', store.projectList)
  refreshProject(data)
<<<<<<< HEAD
>>>>>>> appendCreateTask
=======
  $('.seeMore').on('submit', onGetSingleProject)
>>>>>>> updateTasks
}

const getAllProjectsFailure = (error) => {
  console.log('getAllProjectsFailure is ', error)
}

const createTaskSuccess = (data) => {
  console.log('createTaskSuccess is ', data)
<<<<<<< HEAD
<<<<<<< HEAD
  console.log(data.task.name)
  $('#task-name').val('')
  $('#task-description').val('')
  // $('#createTaskContent').text(data.task.name + ', ' + data.task.description)
=======
=======
  console.log(data.task.name)
>>>>>>> appendCreateTask
  $('#createTaskContent').text(data.task.name + ', ' + data.task.description)
>>>>>>> createTask
}

const createTaskFailure = (error) => {
  console.error('createTaskFailure is ', error)
}

const getAllTasksSuccess = (data) => {
  console.log('get all tasks success is ', data)
<<<<<<< HEAD
  // $('#getAllTasksContent').text(data)
  // console.log(data.tasks[0].project.id)
=======
  $('#getAllTasksContent').text(data)
  console.log(data.tasks[0].project.id)
>>>>>>> appendCreateTask
}

const getAllTasksFailure = (error) => {
  console.log('getAllTasksFailure is ', error)
}

const getProjectSuccess = (data) => {
  store.singleProject = data.project
  console.log('get project success is ', data)
  console.log('getProjectSuccess tasks ', data.project.tasks)
<<<<<<< HEAD
  console.log('getProjectSuccess iscomplete ', data.project.tasks.iscomplete)
  const showOneProjectHtml = showOneProjectTemplate({ project: store.singleProject })
  $('#getAllProjectsContent').empty()
  $('#getNewProjectContent').empty()
  $('#getProjectContent').html(showOneProjectHtml)
  $('.updateProject').on('submit', onUpdateProject)
  $('.updateTasks').on('submit', onUpdateTask)
  $('.destroyProject').on('click', onDeleteProject)
<<<<<<< HEAD
  $('.destroyTask').on('click', onDeleteTask)
  $('#create-project-body').addClass('hidden')
  $('#create-task-body').addClass('hidden')
=======
  const showOneProjectHtml = showOneProjectTemplate({ project: store.singleProject })
  $('#getProjectContent').html(showOneProjectHtml)
<<<<<<< HEAD
  $('.update').on('submit', onUpdateProject)
>>>>>>> appendCreateTask
=======
  $('.updateProject').on('submit', onUpdateProject)
  $('.updateTasks').on('submit', onUpdateTask)
>>>>>>> updateTasks
=======
  // $('.destroyTask').on('click', onDeleteTask)
>>>>>>> deleteProject
  // $('#getProjectContent').text(data)
}

const getProjectFailure = (error) => {
  console.log('getProjectTasksFailure is ', error)
}

const updateProjectSuccess = (response) => {
  console.log('success is ', response.project.id)
  api.getProject(response)
    .then(getProjectSuccess)
    .catch(getProjectFailure)
}

const updateProjectFailure = (error) => {
  console.log(error)
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> updateTasks
const updateTaskSuccess = (response) => {
  console.log('success is ', response)
  api.getProject(response)
    .then(getProjectSuccess)
    .catch(getProjectFailure)
}

const updateTaskFailure = (error) => {
  console.log(error)
}

const onGetSingleProject = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('onGetProject data is ', data)
  console.log('data.project.id is ', data.project.id)
  api.getProject(data)
    .then(getProjectSuccess)
    .catch(getProjectFailure)
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> deleteProject
const onDeleteProject = (event) => {
  event.preventDefault()
  console.log('onDeleteProject firing')
  const removeProject = $(event.target).attr('data-id')
  // store.projectList = store.projectList.filter((project) => {
  //   return String(project.id) !== String(removeProject)
  // })
<<<<<<< HEAD
  // refreshProjects()
=======
  // refreshProject()
>>>>>>> deleteProject
  api.deleteProject(removeProject)
    .then(deleteProjectSuccess)
    .catch(deleteProjectFailure)
    // .then(() => {
    //   api.getAllProjects()
    //     .then(getAllProjectsSuccess)
    //     .catch(getAllProjectsFailure)
    // })
      // .catch(updateRecipeFailure)
}

<<<<<<< HEAD
const onDeleteTask = (event) => {
  event.preventDefault()
  // refreshProject()
  console.log('onDeleteTask firing')
  const removeTask = $(event.target).attr('data-id')
  // store.projectList = store.projectList.filter((project) => {
  //   return String(project.id) !== String(removeProject)
  // })
  // refreshProjects()
  api.deleteTask(removeTask)
    .then(deleteTaskSuccess)
    .catch(deleteTaskFailure)
    // .then(() => {
    //   api.getAllProjects()
    //     .then(getAllProjectsSuccess)
    //     .catch(getAllProjectsFailure)
    // })
      // .catch(updateRecipeFailure)
}

const deleteProjectSuccess = (response) => {
  console.log('deleteProjectSuccess response is ', response)
  api.getAllProjects()
      .then(getAllProjectsSuccess)
      .catch(getAllProjectsFailure)
=======
// cont onDeleteTask

const deleteProjectSuccess = (response) => {
  console.log('deleteProjectSucces response is ', response)
>>>>>>> deleteProject
}

const deleteProjectFailure = (error) => {
  console.log(error)
}

<<<<<<< HEAD
const deleteTaskSuccess = (response) => {
  console.log('deleteTaskSuccess response is ', response)
}

const deleteTaskFailure = (error) => {
  console.log(error)
}

=======
>>>>>>> appendCreateTask
=======
>>>>>>> updateTasks
=======
>>>>>>> deleteProject
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createProjectSuccess,
  createProjectFailure,
  createTaskSuccess,
  createTaskFailure,
  getAllProjectsSuccess,
  getAllProjectsFailure,
  getAllTasksSuccess,
  getAllTasksFailure,
  getProjectSuccess,
<<<<<<< HEAD
<<<<<<< HEAD
  getProjectFailure,
  updateTaskSuccess,
  updateTaskFailure,
  deleteProjectSuccess,
  deleteProjectFailure,
  deleteTaskSuccess,
  deleteTaskFailure
=======
  getProjectFailure
>>>>>>> appendCreateTask
=======
  getProjectFailure,
  updateTaskSuccess,
<<<<<<< HEAD
  updateTaskFailure
>>>>>>> updateTasks
=======
  updateTaskFailure,
  deleteProjectSuccess,
  deleteProjectFailure
>>>>>>> deleteProject
}
