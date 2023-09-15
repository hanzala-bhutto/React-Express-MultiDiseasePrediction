import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  dotenv.config();
  app.setGlobalPrefix('api');

  // Log each request
  app.use((req, res, next) => {
    Logger.log(`Request ${req.method} ${req.originalUrl} `);
    res.on('finish', () => {
      Logger.log(`Response ${res.statusCode}`);
    });
    next();
  });

  (app as any).set('etag', false);

  app.use((req, res, next) => {
    res.removeHeader('x-powered-by');
    res.removeHeader('date');
    next();
  });

  const config = new DocumentBuilder()
    .setTitle('Multi Disease API')
    .setDescription('The Multi Disease API description')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3001);
}
bootstrap();
