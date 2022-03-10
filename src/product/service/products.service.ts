import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ProductEntity } from '../product.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/auth/user.entity';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>) { }
    
    async getAll(): Promise<ProductEntity[]> {
        return await this.productRepository.find()
    }

    async create(product: ProductEntity, user: Users): Promise<ProductEntity> {
        if (user.role == 'admin') {
            return await this.productRepository.save(product);

        }
        throw new UnauthorizedException();

    }

    async getOne(id: number): Promise<ProductEntity> {
        return this.productRepository.findOne(id);
    }

    async update(id: number, product: ProductEntity, user: Users): Promise<UpdateResult> {
        if (user.role == 'admin') {
            return await this.productRepository.update(id, product);
        }
        throw new UnauthorizedException();
    }

    async delete(id: number, user: Users): Promise<DeleteResult> {
        if (user.role == 'admin') {
            return await this.productRepository.delete(id);
        }
        throw new UnauthorizedException();
    }
    
}
