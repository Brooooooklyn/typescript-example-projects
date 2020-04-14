import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.listen(3000)
}

bootstrap().catch((e) => {
  console.error(e)
  process.exit(1)
})
