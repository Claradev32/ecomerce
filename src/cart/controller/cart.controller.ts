import { Controller, Post, Get,Request, Delete, Body, UseGuards } from '@nestjs/common';
import { CartService } from '../service/cart.service';
import { CartEntity } from '../cart.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/v1/cart')
export class CartController {
    constructor(private cartService: CartService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async AddToCart(@Body() body, @Request() req): Promise<void> {
        const { productId, quantity } = body
        return await this.cartService.addToCart(productId, quantity, req.user.username);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getItemsInCart(@Request() req): Promise<CartEntity[]> {
        return await this.cartService.getItemsInCard(req.user.username);

    }

    // @Delete()
    // async emptyCat(): Promise<void> {
    //     return this.cartService.emptyCat()
    // }

}

