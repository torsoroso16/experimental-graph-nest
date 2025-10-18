import { CoreEntity } from 'src/module/common/entities/core.entity';
import { PaymentGateWay } from './payment-gateway.entity';
import { InputType, ObjectType, Field, Int } from '@nestjs/graphql';

@InputType('CardInputType', { isAbstract: true })
@ObjectType()
export class Card extends CoreEntity {
  @Field()
  method_key: string;

  @Field()
  default_card: boolean;

  @Field(() => Int, { nullable: true })
  payment_gateway_id?: number;

  @Field({ nullable: true })
  fingerprint?: string;

  @Field({ nullable: true })
  owner_name?: string;

  @Field({ nullable: true })
  network?: string;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  last4?: string;

  @Field({ nullable: true })
  expires?: string;

  @Field({ nullable: true })
  origin?: string;

  @Field({ nullable: true })
  verification_check?: string;

  @Field(() => PaymentGateWay, { nullable: true })
  payment_gateways?: PaymentGateWay;
}
