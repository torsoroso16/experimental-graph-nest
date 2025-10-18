import { CoreEntity } from 'src/module/common/entities/core.entity';
import { InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType('PaymentGateWayType', { isAbstract: true })
@ObjectType()
export class PaymentGateWay extends CoreEntity {
  user_id: number;
  customer_id: string;
  gateway_name: string;
  @Field({ nullable: true })
  dummy?: boolean;
}
