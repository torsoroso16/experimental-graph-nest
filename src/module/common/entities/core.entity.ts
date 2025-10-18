import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ObjectType()
export class CoreEntity {
  @Field(() => ID)
  id: number;

  @Field(() => Date, { nullable: true })
  @Type(() => Date)
  created_at?: Date;

  @Field(() => Date, { nullable: true })
  @Type(() => Date)
  updated_at?: Date;
}
