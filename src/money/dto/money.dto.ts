import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMoneyDto {
    @IsNumber()
    amount: number;

    @IsBoolean()
    isPositive: boolean;

    @IsString()
    description: string;

    @IsNotEmpty()
    categoryId: number;

    @IsNotEmpty()
    balanceId: number;
}
