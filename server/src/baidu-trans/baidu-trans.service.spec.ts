import { Test, TestingModule } from '@nestjs/testing';
import { BaiduTransService } from './baidu-trans.service';

describe('BaiduTransService', () => {
  let service: BaiduTransService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaiduTransService],
    }).compile();

    service = module.get<BaiduTransService>(BaiduTransService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
