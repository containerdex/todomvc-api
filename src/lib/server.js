import express from 'express'

import { Registrations, Entries } from '../routes'

export default class Server {
  constructor() {
    Object.assign(this, {
      application: express(),
      config: {
        port: 8080
      }
    })

    this.configureServer()
  }

  startService() {
    this.application.listen(this.config.port)

    console.log(`Server running on port: ${this.config.port}`)
  }

  configureServer() {
    this.application.use(express.json())

    const registrations = new Registrations()
    const entries = new Entries()

    console.log('TODO: Configure Server')

    console.dir(Registrations.getPath())
    console.dir(Entries.getPath())

    this.application.use(Registrations.getPath(), registrations.router)
    this.application.use(Entries.getPath(), entries.router)
  }
}
