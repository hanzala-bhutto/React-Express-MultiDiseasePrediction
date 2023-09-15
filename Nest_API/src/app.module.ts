import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiabetesModule } from './diabetes/diabetes.module';
import { HeartModule } from './heart/heart.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "localhost",
      "port": 5433,
      "username": "postgres",
      "password": "fast",
      "database": "multidisease_db",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true
    }),
    DiabetesModule,
    HeartModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
