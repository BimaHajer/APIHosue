import { Test, TestingModule } from '@nestjs/testing';
import { TypeHouseService } from './type_house.service';

describe('TypeHouseService', () => {
  let service: TypeHouseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeHouseService],
    }).compile();

    service = module.get<TypeHouseService>(TypeHouseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
