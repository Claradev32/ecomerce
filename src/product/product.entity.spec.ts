import { ProductEntity } from './product.entity';

describe('ProductEntity', () => {
  it('should be defined', () => {
    expect(new ProductEntity()).toBeDefined();
  });
});
