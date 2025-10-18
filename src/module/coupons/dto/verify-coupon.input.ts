import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Coupon } from '../entities/coupon.entity';

@InputType()
export class VerifyCouponItemInput {
  @Field(() => ID, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  unit?: string;

  @Field({ nullable: true })
  image?: string;

  @Field(() => Int, { nullable: true })
  stock?: number;

  @Field(() => Int, { nullable: true })
  price?: number;

  @Field({ nullable: true })
  language?: string;

  @Field(() => Int, { nullable: true })
  in_flash_sale?: number;

  @Field({ nullable: true })
  is_digital?: boolean;

  @Field(() => ID, { nullable: true })
  shop_id?: number;

  @Field(() => Int, { nullable: true })
  quantity?: number;

  @Field(() => Int, { nullable: true })
  itemTotal?: number;
}

@InputType()
export class VerifyCouponInput {
  @Field({ nullable: true })
  code?: string;

  @Field(() => Int, { nullable: true })
  sub_total?: number;

  @Field(() => [VerifyCouponItemInput], { nullable: true })
  item?: VerifyCouponItemInput[];
}

@ObjectType()
export class VerifyCouponResponse {
  @Field()
  is_valid: boolean;

  @Field(() => Coupon, { nullable: true })
  coupon?: Coupon;

  @Field()
  message: string;
}
