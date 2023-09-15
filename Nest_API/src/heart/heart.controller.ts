import { Body, Controller, Post } from '@nestjs/common';
import { HeartEntry } from './dtos/heart-entry.dto';
import { HeartService } from './heart.service';

@Controller('heart')
export class HeartController {

    constructor(private heartService: HeartService){}

    @Post('/predict')
    async predict (@Body() heartEntry: HeartEntry): Promise<number>{
        const predictedValue = await this.heartService.predict(heartEntry);
        return predictedValue;
    }

}
