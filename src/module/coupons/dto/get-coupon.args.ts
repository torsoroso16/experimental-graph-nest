import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetCouponArgs {
  @Field(() => ID, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  language?: string;
}
