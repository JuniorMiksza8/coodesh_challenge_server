import { createExpressServer } from 'routing-controllers'
import 'reflect-metadata'
import { Server } from 'http'

export class App {
  app: Server

  constructor() {
    this.app = createExpressServer({
      controllers: [__dirname + '/domains/**/**/*.controller{.ts,.js}'],
    })
  }

  init() {
    this.app.listen(process.env.HTTP_SERVER_PORT, () => {
      console.log(`Server up and running on ${process.env.HTTP_SERVER_PORT}`)
    })
  }
}
