import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateMoneyDto {
    @IsNumber()
    amount: number;

    @IsBoolean()
    isPositive: boolean;

    @IsString()
    description: string;
}
