import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class PriceRange {
  @Field(() => Float)
  from: number;

  @Field(() => Float)
  to: number;
}
