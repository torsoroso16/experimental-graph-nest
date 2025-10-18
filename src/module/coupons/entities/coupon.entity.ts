import {
  Field,
  ID,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { Attachment } from 'src/module/common/entities/attachment.entity';
import { CoreEntity } from 'src/module/common/entities/core.entity';
import { Order } from 'src/module/orders/entities/order.entity';

export enum CouponType {
  FIXED_COUPON = 'fixed',
  PERCENTAGE_COUPON = 'percentage',
  FREE_SHIPPING_COUPON = 'free_shipping',
  DEFAULT_COUPON = 'fixed',
}

registerEnumType(CouponType, { name: 'CouponType' });

@InputType('CouponInputType', { isAbstract: true })
@ObjectType()
export class Coupon extends CoreEntity {
  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [Order], { nullable: 'itemsAndList' })
  orders?: Order[];

  @Field(() => CouponType, { nullable: true })
  @IsEnum(CouponType)
  type?: CouponType;

  @Field({ nullable: true })
  language?: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  translated_languages?: string[];

  @Field(() => Attachment, { nullable: true })
  image?: Attachment;

  @Field({ nullable: true })
  is_valid?: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  amount?: number;

  @Field({ nullable: true })
  minimum_cart_amount?: number;

  @Field({ nullable: true })
  sub_total?: number;

  @Field({ nullable: true })
  active_from?: string;

  @Field({ nullable: true })
  expire_at?: string;

  @Field({ nullable: true })
  target?: boolean;

  @Field({ nullable: true })
  is_approve?: boolean;

  @Field(() => ID, { nullable: true })
  shop_id?: number;

  @Field(() => ID, { nullable: true })
  user_id?: number;
}
