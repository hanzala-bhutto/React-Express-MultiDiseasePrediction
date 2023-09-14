import { Body, Controller, Post } from '@nestjs/common';
import { DiabetesEntry } from './dtos/diabetes-entry.dto';
import { DiabetesService } from './diabetes.service';

@Controller('diabetes')
export class DiabetesController {
    
    constructor(private diabetesService : DiabetesService ){

    }
    
    @Post('/predict')
    async predict(@Body() body: DiabetesEntry): Promise<number> {
        // console.log(body);
        const predictedValue = await this.diabetesService.predict(body);
        // console.log(predictedValue);
        return predictedValue;
    }
}
