import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBalanceDto {
  @IsNumber()
  @IsNotEmpty()
  balance: number;

  @IsString()
  @IsNotEmpty()
  title: string;
}
