import { Test, TestingModule } from '@nestjs/testing';
import { DiabetesService } from './diabetes.service';

describe('DiabetesService', () => {
  let service: DiabetesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiabetesService],
    }).compile();

    service = module.get<DiabetesService>(DiabetesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
