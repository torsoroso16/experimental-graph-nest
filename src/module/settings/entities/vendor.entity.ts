import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('VendorInputType', { isAbstract: true })
@ObjectType()
export class Vendor {
  @Field({ nullable: true }) statusChangeOrder?: boolean;
  @Field({ nullable: true }) refundOrder?: boolean;
  @Field({ nullable: true }) paymentOrder?: boolean;
  @Field({ nullable: true }) createReview?: boolean;
  @Field({ nullable: true }) createQuestion?: boolean;
}
