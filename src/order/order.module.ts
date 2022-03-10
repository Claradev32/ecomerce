import { Module } from '@nestjs/common';
import { OrderController } from './controller/order.controller';
import { OrderService } from './service/order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { ProductEntity } from 'src/product/product.entity';
import { ProductsService } from 'src/product/service/products.service';
import { CartService } from 'src/cart/service/cart.service';
import { CartEntity } from 'src/cart/cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, ProductEntity, CartEntity])],
  controllers: [OrderController],
  providers: [OrderService, CartService, ProductsService]
})
export class OrderModule { }
