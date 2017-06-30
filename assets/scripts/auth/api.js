'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createProject = (data) => {
  console.log('createProject data is', data)
  return $.ajax({
    url: config.apiOrigin + '/projects/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getAllProjects = () => {
  // console.log('get index', data)
  return $.ajax({
    url: config.apiOrigin + '/projects',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createTask = (data) => {
  console.log('createTask data is', data)
  return $.ajax({
    url: config.apiOrigin + '/tasks/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getAllTasks = () => {
  // console.log('get index', data)
  return $.ajax({
    url: config.apiOrigin + '/tasks',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getProject = (id) => {
  console.log('stringy ', id.project.id)
  // event.preventDefault()
  return $.ajax({
    url: config.apiOrigin + '/projects/' + id.project.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateProject = (data, newProject) => {
  // console.log(data + 'PATCH TEST DATA')
  event.preventDefault()
  return $.ajax({
    url: config.apiOrigin + '/projects/' + newProject,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createProject,
  createTask,
  getAllTasks,
  getAllProjects,
  getProject,
  updateProject
}
