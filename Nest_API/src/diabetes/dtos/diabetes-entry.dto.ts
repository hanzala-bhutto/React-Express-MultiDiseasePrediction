import { ApiProperty } from "@nestjs/swagger";

export class DiabetesEntry{
    @ApiProperty({ default: 6 })
    pregnancies: number;

    @ApiProperty({ default: 148 })
    glucose: number;
    
    @ApiProperty({ default: 72 })
    bloodPressure: number;
    
    @ApiProperty({ default: 35 })
    skinThickness: number;
    
    @ApiProperty({ default: 0 })
    insulin: number;
    
    @ApiProperty({ default: 33.6 })
    BMI: number;
    
    @ApiProperty({ default: 0.627 })
    dpf: number;
    
    @ApiProperty({ default: 50 })
    age: number;
}