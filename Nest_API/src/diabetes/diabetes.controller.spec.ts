import { Test, TestingModule } from '@nestjs/testing';
import { DiabetesController } from './diabetes.controller';

describe('DiabetesController', () => {
  let controller: DiabetesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiabetesController],
    }).compile();

    controller = module.get<DiabetesController>(DiabetesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
