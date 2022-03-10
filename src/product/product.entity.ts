import { Entity, ManyToMany, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class ProductEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: number

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    quantity: string

    @CreateDateColumn()
    createdAt: String

    @UpdateDateColumn()
    updtedAt: String
}
