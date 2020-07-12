import express from 'express'

import BaseRoute from './base-route'

import { userModel } from '../models'

export default class Registrations extends BaseRoute {
  constructor() {
    super()
  }

  getIndex(req, res) {
    const users = userModel.findAll()

    res.json(users)
  }

  getShow(req, res) {
    const [user, _] = userModel.find(req.params.id)

    res.json(user)
  }

  postCreate(req, res) {
    const userId = userModel.create(req.body)

    res.json({ message: userId })
  }

  patchUpdate(req, res) {
    const updatedUser = userModel.update(req.params.id, req.body)

    res.json(updatedUser)
  }

  deleteDestroy(req, res) {
    const deletedIndex = userModel.destroy(req.params.id)

    res.json({
      status: 'success',
      index: deletedIndex
    })
  }
}
