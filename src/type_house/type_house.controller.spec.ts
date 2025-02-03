import { Test, TestingModule } from '@nestjs/testing';
import { TypeHouseController } from './type_house.controller';
import { TypeHouseService } from './type_house.service';

describe('TypeHouseController', () => {
  let controller: TypeHouseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeHouseController],
      providers: [TypeHouseService],
    }).compile();

    controller = module.get<TypeHouseController>(TypeHouseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
