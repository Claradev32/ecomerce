import { Module } from '@nestjs/common';
import { CartService } from './service/cart.service';
import { CartController } from './controller/cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './cart.entity';
import { ProductsService } from 'src/product/service/products.service';
import { ProductEntity } from 'src/product/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, ProductEntity])],
  providers: [CartService, ProductsService],
  controllers: [CartController]
})
export class CartModule { }
