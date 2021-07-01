import {Field, InputType} from '@nestjs/graphql';
import {IsNumber, IsString} from 'class-validator';

@InputType()
export class BooksDto {
  @Field()
  @IsString()
  title: string;

  @IsNumber()
  price: number;
}
