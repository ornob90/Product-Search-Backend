/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ required: true }) title: string;
  @Prop({ required: true }) slug: string;
  @Prop({ required: true }) brand: string;
  @Prop({ required: true }) category: string;
  @Prop({ required: true }) price: number;
  @Prop({ required: true }) rating: number;
  @Prop({ required: true }) stock: number;
  @Prop({ type: [String], default: [] }) links: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
