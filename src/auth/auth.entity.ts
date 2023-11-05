import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
//entity class for users
@Entity()
export class authentity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    username: string;

    @Column({ type: 'varchar'})
    password: string;




}
