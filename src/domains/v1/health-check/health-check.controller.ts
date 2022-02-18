import { Controller, Get, HttpCode } from 'routing-controllers'

@Controller('/')
export class HealthCheckController {
  
  @HttpCode(200)
  @Get()
  status() {
    return 'Fullstack Challenge 2021 🏅 - Covid Daily Cases'
  }
}
