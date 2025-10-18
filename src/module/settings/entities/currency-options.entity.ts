import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType('CurrencyOptionsInputType', { isAbstract: true })
@ObjectType()
export class CurrencyOptions {
  @Field() formation: string;
  @Field(() => Int) fractions: number;
}
