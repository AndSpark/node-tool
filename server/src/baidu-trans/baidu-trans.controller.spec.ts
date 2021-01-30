import { Test, TestingModule } from '@nestjs/testing';
import { BaiduTransController } from './baidu-trans.controller';

describe('BaiduTransController', () => {
  let controller: BaiduTransController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaiduTransController],
    }).compile();

    controller = module.get<BaiduTransController>(BaiduTransController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
