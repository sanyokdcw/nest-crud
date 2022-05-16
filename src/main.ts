import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Валидация, смотрит на @Body и Dto в запросах и проверяет через class-validator
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT);
}
void bootstrap();
