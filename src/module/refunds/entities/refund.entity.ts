import { Field, ID, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Attachment } from 'src/module/common/entities/attachment.entity';
import { CoreEntity } from 'src/module/common/entities/core.entity';
import { Order } from 'src/module/orders/entities/order.entity';
import { RefundReason } from 'src/module/refund-reason/entities/refund-reason.entity';
import { Shop } from 'src/module/shops/entities/shop.entity';
import { User } from 'src/module/users/entities/user.entity';

export enum RefundStatus {
  APPROVED = 'Approved',
  PENDING = 'Pending',
  REJECTED = 'Rejected',
  PROCESSING = 'Processing',
}

registerEnumType(RefundStatus, { name: 'RefundStatus' });

@InputType('RefundInputType', { isAbstract: true })
@ObjectType()
export class Refund extends CoreEntity {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [Attachment], { nullable: 'itemsAndList' })
  images?: Attachment[];

  @Field()
  amount: string;

  @Field(() => RefundStatus, { nullable: true })
  status?: RefundStatus;

  @Field(() => Shop, { nullable: true })
  shop?: Shop;

  @Field(() => Order, { nullable: true })
  order?: Order;

  @Field(() => User, { nullable: true })
  customer?: User;

  @Field(() => ID)
  refund_reason_id: number;

  @Field(() => RefundReason, { nullable: true })
  refund_reason?: RefundReason;
}
