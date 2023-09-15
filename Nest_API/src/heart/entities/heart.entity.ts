
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Heart{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    age: number;

    @Column({ nullable: false })
    sex: number;

    @Column({ nullable: false })
    cp: number;

    @Column({ nullable: false })
    trestbps: number;

    @Column({ nullable: false })
    chol: number;

    @Column({ nullable: false })
    fbs: number;

    @Column({ nullable: false })
    restecg: number;

    @Column({ nullable: false })
    thalach: number;

    @Column({ nullable: false })
    exang: number;

    @Column('float',{ nullable: false })
    oldpeak: number;

    @Column({ nullable: false })
    slope: number;

    @Column({ nullable: false })
    ca: number;

    @Column({ nullable: false })
    thal: number;

    @Column({ nullable: true })
    target: number | null;
}
