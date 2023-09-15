import { Test, TestingModule } from '@nestjs/testing';
import { HeartService } from './heart.service';

describe('HeartService', () => {
  let service: HeartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeartService],
    }).compile();

    service = module.get<HeartService>(HeartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
