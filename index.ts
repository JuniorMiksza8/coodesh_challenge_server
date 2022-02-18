import { App } from './src/app'
import { config } from 'dotenv'

try {
  config()
  App()
} catch (error) {
  console.log(error.message)
}
