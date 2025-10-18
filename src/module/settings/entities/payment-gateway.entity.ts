import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PaymentGatewayInputType', { isAbstract: true })
@ObjectType()
export class PaymentGateway {
  @Field() name: string;
  @Field() title: string;
}
