import { App } from './src/app'
import { config } from 'dotenv'
import { LoaderService } from './src/services/loader.service'
const loaderService = new LoaderService()

try {
  config()
  const app = new App()
  loaderService.loadCases().then(() => {
    app.init()
  })
} catch (error) {
  console.log(error.message)
}
