import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/todo');
  app.use(cookieParser())
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });
  
  const port =process.env.PORT;
  await app.listen(port);
}
bootstrap();
