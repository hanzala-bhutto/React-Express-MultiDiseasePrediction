import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiabetesModule } from './diabetes/diabetes.module';
import { HeartModule } from './heart/heart.module';
import { ConfigModule } from '@nestjs/config';
import { PostgreSqlDataSource } from './config/OrmConfig';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    TypeOrmModule.forRoot(PostgreSqlDataSource),
    DiabetesModule,
    HeartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [ConfigModule],
})
export class AppModule {}
