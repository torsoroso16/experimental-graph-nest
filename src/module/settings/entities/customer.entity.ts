import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CustomerInputType', { isAbstract: true })
@ObjectType()
export class Customer {
  @Field({ nullable: true }) statusChangeOrder?: boolean;
  @Field({ nullable: true }) refundOrder?: boolean;
  @Field({ nullable: true }) paymentOrder?: boolean;
  @Field({ nullable: true }) answerQuestion?: boolean;
}
