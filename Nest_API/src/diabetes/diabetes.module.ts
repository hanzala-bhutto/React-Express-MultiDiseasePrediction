import { Module } from '@nestjs/common';
import { DiabetesService } from './diabetes.service';
import { DiabetesController } from './diabetes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diabetes } from './entities/diabetes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Diabetes])],
  providers: [DiabetesService],
  controllers: [DiabetesController],
})
export class DiabetesModule {}
