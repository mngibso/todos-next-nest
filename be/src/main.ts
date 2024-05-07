import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// Entry point for Nest.js

async function bootstrap() {
  // create the app instance
  const app = await NestFactory.create(AppModule, { cors: true });
  // Global validation pipe - automatically validate incoming requests
  app.useGlobalPipes(new ValidationPipe({}));
  await app.listen(3000);
}
bootstrap();
