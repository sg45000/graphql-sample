import {Field, ID, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class BookEntity {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;
}
