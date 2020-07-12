import express from 'express'

export default class BaseRoute {
  router = express.Router()
  routes = [
    {
      requestMethod: 'get',
      method: 'getIndex',
      path: '/'
    },
    {
      requestMethod: 'get',
      method: 'getShow',
      path: '/:id'
    },
    {
      requestMethod: 'post',
      method: 'postCreate',
      path: '/'
    },
    {
      requestMethod: 'patch',
      method: 'patchUpdate',
      path: '/:id'
    },
    {
      requestMethod: 'delete',
      method: 'deleteDestroy',
      path: '/:id'
    }
  ]

  constructor() {
    Object.assign(this, {
      getIndex: this.getIndex.bind(this),
      getShow: this.getShow.bind(this),
      postCreate: this.postCreate.bind(this),
      patchUpdate: this.patchUpdate.bind(this),
      patchDestroy: this.deleteDestroy.bind(this)
    })

    this.setupRouter()
  }

  static getPath() {
    return `/${this.name.toLowerCase()}`
  }

  getIndex(req, res) {
    res.status(404).end()
  }

  getShow(req, res) {
    res.status(404).end()
  }

  postCreate(req, res) {
    res.status(404).end()
  }

  patchUpdate(req, res) {
    res.status(404).end()
  }

  deleteDestroy(req, res) {
    res.status(404).end()
  }

  setupRouter() {
    for (const route of this.routes) {
      this.router[route.requestMethod](route.path, this[route.method])
    }
  }
}
