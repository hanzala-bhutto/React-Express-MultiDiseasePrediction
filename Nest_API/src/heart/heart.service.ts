import { Injectable } from '@nestjs/common';
import { HeartEntry } from './dtos/heart-entry.dto';
import { Heart } from './entities/heart.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { spawn } from 'child_process';

@Injectable()
export class HeartService {

    constructor(@InjectRepository(Heart) private heartRepo: Repository<Heart>){}

    async predict (heartEntry: HeartEntry): Promise<number>{
        const entry = await this.create(heartEntry);
        // console.log(entry);

        const predictedValue = await this.aiPredict(heartEntry);
        // console.log(predictedValue);

        entry.target = predictedValue as unknown as number;

        this.heartRepo.save(entry);

        return predictedValue;

    }

    async create(heartEntry: HeartEntry): Promise<Heart>{
        const entry = this.heartRepo.create(heartEntry);
        await this.heartRepo.save(entry);

        return entry;
    }

    async aiPredict(entry: HeartEntry): Promise<number>{
        
        const entryValues: number[] = Object.values(entry);
        // console.log(entryValues);

        return new Promise((resolve, reject) => {
            const pythProcess = spawn('python', ['-m','src.heart.pythonModel.Heart', JSON.stringify(entryValues)]);

            pythProcess.stdout.on('data', function (data) {
                const prediction = parseInt(data.toString().trim());
                resolve(prediction);
            });

            pythProcess.stderr.on('data', function (data) {
                reject(data.toString());
            });

            pythProcess.on('exit', function (code) {
                // console.log('Child process exited with exit code ' + code);
            });
        })

    }


}
