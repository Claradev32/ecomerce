import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn } from 'typeorm'
import { OrderEntity } from 'src/order/order.entity'

@Entity()
export class CartEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    productId: number

    @Column()
    quantity: number

    @Column()
    price: number

    @Column()
    total: number

    @Column()
    userId: string
    
    @ManyToOne(type => OrderEntity, order => order.id)
    items: OrderEntity
}
