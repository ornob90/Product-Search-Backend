/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsArray, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString() title: string;
  @IsString() slug: string;
  @IsString() brand: string;
  @IsString() category: string;
  @IsNumber() price: number;
  @IsNumber() rating: number;
  @IsNumber() stock: number;
  @IsOptional() @IsArray() links?: string[];
}
