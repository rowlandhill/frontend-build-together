'use strict'

const store = require('../store.js')
const api = require('./api.js')
const showProjectsTemplate = require('../templates/get-all-projects.handlebars')
const showOneProjectTemplate = require('../templates/get-one-project.handlebars')
const getFormFields = require(`../../../lib/get-form-fields`)

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

const onUpdateProject = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const newProject = $(event.target).attr('data-id')
  console.log('event.target is ' + data)
  console.log('newProject is ', newProject)
  $('.updateProject').trigger('reset')
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
  $('.destroyTask').on('click', onDeleteTask)
}

const createProjectSuccess = (data) => {
  console.log('createProjectSuccess is ', data)
  $('#createProjectContent').text(data.project.title + ', ' + data.project.body)
  $('#project-id').val(data.project.id)
  console.log('project_id is ', data.project.id)
  console.log('user_id is ', data.project.user.id)
}

const createProjectFailure = (error) => {
  console.error('createProjectFailure is ', error)
}

const getAllProjectsSuccess = (data) => {
  store.projectList = data.projects
  console.log('get all projects success is ', data)
  $('#getAllProjectsContent').text(data)
  console.log('store.projectlist data is ', store.projectList)
  refreshProject(data)
  $('.seeMore').on('submit', onGetSingleProject)
}

const getAllProjectsFailure = (error) => {
  console.log('getAllProjectsFailure is ', error)
}

const createTaskSuccess = (data) => {
  console.log('createTaskSuccess is ', data)
  console.log(data.task.name)
  $('#createTaskContent').text(data.task.name + ', ' + data.task.description)
}

const createTaskFailure = (error) => {
  console.error('createTaskFailure is ', error)
}

const getAllTasksSuccess = (data) => {
  console.log('get all tasks success is ', data)
  $('#getAllTasksContent').text(data)
  console.log(data.tasks[0].project.id)
}

const getAllTasksFailure = (error) => {
  console.log('getAllTasksFailure is ', error)
}

const getProjectSuccess = (data) => {
  store.singleProject = data.project
  console.log('get project success is ', data)
  console.log('getProjectSuccess tasks ', data.project.tasks)
  console.log('getProjectSuccess iscomplete ', data.project.tasks.iscomplete)
  const showOneProjectHtml = showOneProjectTemplate({ project: store.singleProject })
  $('#getProjectContent').html(showOneProjectHtml)
  $('.updateProject').on('submit', onUpdateProject)
  $('.updateTasks').on('submit', onUpdateTask)
  $('.destroyProject').on('click', onDeleteProject)
  $('.destroyTask').on('click', onDeleteTask)
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

const onDeleteProject = (event) => {
  event.preventDefault()
  console.log('onDeleteProject firing')
  const removeProject = $(event.target).attr('data-id')
  // store.projectList = store.projectList.filter((project) => {
  //   return String(project.id) !== String(removeProject)
  // })
  // refreshProject()
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

const onDeleteTask = (event) => {
  event.preventDefault()
  console.log('onDeleteTask firing')
  const removeTask = $(event.target).attr('data-id')
  // store.projectList = store.projectList.filter((project) => {
  //   return String(project.id) !== String(removeProject)
  // })
  // refreshProject()
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
}

const deleteProjectFailure = (error) => {
  console.log(error)
}

const deleteTaskSuccess = (response) => {
  console.log('deleteTaskSuccess response is ', response)
}

const deleteTaskFailure = (error) => {
  console.log(error)
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
  createTaskFailure,
  getAllProjectsSuccess,
  getAllProjectsFailure,
  getAllTasksSuccess,
  getAllTasksFailure,
  getProjectSuccess,
  getProjectFailure,
  updateTaskSuccess,
  updateTaskFailure,
  deleteProjectSuccess,
  deleteProjectFailure,
  deleteTaskSuccess,
  deleteTaskFailure
}
