import { createExpressServer } from 'routing-controllers'
import 'reflect-metadata'

export function App() {
  const app = createExpressServer({
    controllers: [__dirname + '/domains/**/**/*.controller{.ts,.js}'],
  })

  app.listen(process.env.HTTP_SERVER_PORT, () => {
    console.log(`Server up and running on ${process.env.HTTP_SERVER_PORT}`)
  })
}
