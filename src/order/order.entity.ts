
import { Entity, OneToMany, JoinColumn, Column, PrimaryGeneratedColumn } from 'typeorm'
import { CartEntity } from '../cart/cart.entity'

@Entity()
export class OrderEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @OneToMany(type => CartEntity, cart => cart.id)
    items: CartEntity[];

    @Column()
    subTotal: number

    @Column({ default: false })
    payed: boolean

}



