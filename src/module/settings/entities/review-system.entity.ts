import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ReviewSystemInput', { isAbstract: true })
@ObjectType()
export class ReviewSystem {
  @Field({ nullable: true }) value?: string;
  @Field({ nullable: true }) name?: string;
}
