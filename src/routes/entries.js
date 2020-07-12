import express from 'express'

import BaseRoute from './base-route'

import { entryModel } from '../models'

export default class Entries extends BaseRoute {
  constructor() {
    super()
  }

  getIndex(req, res) {
    const users = entryModel.findAll()

    res.json(users)
  }

  getShow(req, res) {
    const [user, _] = entryModel.find(req.params.id)

    res.json(user)
  }

  postCreate(req, res) {
    const userId = entryModel.create(req.body)

    res.json({ message: userId })
  }

  patchUpdate(req, res) {
    const updatedUser = entryModel.update(req.params.id, req.body)

    res.json(updatedUser)
  }

  deleteDestroy(req, res) {
    const deletedIndex = entryModel.destroy(req.params.id)

    res.json({
      status: 'success',
      index: deletedIndex
    })
  }
}
