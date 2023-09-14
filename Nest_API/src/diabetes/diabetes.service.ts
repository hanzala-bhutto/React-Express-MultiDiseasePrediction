import { Inject, Injectable } from '@nestjs/common';
import { DiabetesEntry } from './dtos/diabetes-entry.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Diabetes } from './entities/diabetes.entity';
import { Repository } from 'typeorm';

const {spawn} = require('child_process');

@Injectable()
export class DiabetesService {

    constructor(@InjectRepository(Diabetes) private diabetesRepo: Repository<Diabetes>){
        
    }

    async predict(diabetesEntry : DiabetesEntry): Promise<number> {
        
        const entry = await this.create(diabetesEntry);
        console.log(entry);
        
        const predictedValue = await this.aiPredict(entry);
        // console.log(predictedValue);

        entry.outcome = predictedValue as unknown as number; 
        // console.log(entry);

        this.diabetesRepo.save(entry);

        return predictedValue;
    }

    async create(diabetesEntry: DiabetesEntry): Promise<Diabetes> {
        
        const entry = this.diabetesRepo.create(diabetesEntry);
        this.diabetesRepo.save(entry);

        return entry;
    }

    async aiPredict(entry: Diabetes): Promise<number> {
     
        // get only values from entry
        const entryValues: number[] = Object.values(entry);
        // console.log(entryValues);
        entryValues.push(0);

        return new Promise((resolve, reject) => {
            const pythProcess = spawn('python', ['-m','src.diabetes.pythonModel.Diabetes', JSON.stringify(entryValues)]);
    
            pythProcess.stdout.on('data', function (data) {
                // console.log('Pipe data from python script ...');
                // console.log(data.toString());
                const prediction = parseInt(data.toString().trim()); // Assuming the output is a single integer
                resolve(prediction);
            });
    
            pythProcess.stderr.on('data', function (data) {
                // console.error('Error from python script ...');
                // console.error(data.toString());
                reject(data.toString());
            });
    
            pythProcess.on('exit', function (code, signal) {
                // console.log('Python process exited with code ' + code);
            });
        });
    }


}
