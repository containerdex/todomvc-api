import { Server } from './lib'
import { Registrations } from './routes'

console.dir(Registrations)

const registrations = new Registrations()

const expressServer = new Server()


expressServer.startService()
