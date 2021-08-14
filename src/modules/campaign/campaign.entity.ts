import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Campaign extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    authorId!: number

    @Column()
    imageId!: number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date

    @Column()
    exposureDate: Date

    @Column()
    website: string
}