import { ApiProperty } from "@nestjs/swagger";

export class HeartEntry{

    @ApiProperty({default: 37})
    age: number;
        
    @ApiProperty({default : 1})
    sex: number;
    
    @ApiProperty({default : 2})
    cp: number;
    
    @ApiProperty({default : 130})
    trestbps: number;
    
    @ApiProperty({default : 250})
    chol: number;
    
    @ApiProperty({default : 0})
    fbs: number;
    
    @ApiProperty({default : 1})
    restecg: number;
    
    @ApiProperty({default : 187})
    thalach: number;
    
    @ApiProperty({default : 0})
    exang: number;
    
    @ApiProperty({default : 3.5})
    oldpeak: number;
    
    @ApiProperty({default : 0})
    slope: number;

    @ApiProperty({default : 0})
    ca: number;

    @ApiProperty({default : 2})
    thal: number;

}