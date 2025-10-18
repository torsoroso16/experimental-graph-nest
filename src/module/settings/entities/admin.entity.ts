import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('AdminInputType', { isAbstract: true })
@ObjectType()
export class Admin {
  @Field({ nullable: true }) statusChangeOrder?: boolean;
  @Field({ nullable: true }) refundOrder?: boolean;
  @Field({ nullable: true }) paymentOrder?: boolean;
}
