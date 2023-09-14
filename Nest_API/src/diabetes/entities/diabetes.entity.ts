import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Diabetes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    pregnancies: number;

    @Column({ nullable: false })
    glucose: number;

    @Column({ nullable: false })
    bloodPressure: number;

    @Column({ nullable: false })
    skinThickness: number;

    @Column({ nullable: false })
    insulin: number;

    @Column('float',{ nullable: false })
    BMI: number;

    @Column('float',{ nullable: false })
    dpf: number;

    @Column({ nullable: false })
    age: number;

    @Column({ nullable: true })
    outcome: number | null;
}