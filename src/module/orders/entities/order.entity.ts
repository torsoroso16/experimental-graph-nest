// order.entity.ts
import {
  ObjectType,
  Field,
  registerEnumType,
  InputType,
  ID,
  Int,
} from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UserAddress } from 'src/module/addresses/entities/address.entity';
import { CoreEntity } from 'src/module/common/entities/core.entity';
import { Coupon } from 'src/module/coupons/entities/coupon.entity';
import { DigitalFile, Product } from 'src/module/products/entities/product.entity';
import { Refund } from 'src/module/refunds/entities/refund.entity';
import { Shop } from 'src/module/shops/entities/shop.entity';
import { User } from 'src/module/users/entities/user.entity';
import { OrderStatus } from './order-status.entity';
import { Review } from 'src/module/reviews/entities/review.entity';
import { PaymentIntent } from 'src/module/payment-intent/entities/payment-intent.entity';

export enum PaymentGatewayType {
  STRIPE = 'stripe',
  CASH_ON_DELIVERY = 'CASH_ON_DELIVERY',
  CASH = 'Cash',
  FULL_WALLET_PAYMENT = 'Full wallet payment',
  PAYPAL = 'paypal',
  RAZORPAY = 'razorpay',
}
export enum OrderStatusType {
  PENDING = 'order-pending',
  PROCESSING = 'order-processing',
  COMPLETED = 'order-completed',
  CANCELLED = 'order-cancelled',
  REFUNDED = 'order-refunded',
  FAILED = 'order-failed',
  AT_LOCAL_FACILITY = 'order-at-local-facility',
  OUT_FOR_DELIVERY = 'order-out-for-delivery',
}

export enum PaymentStatusType {
  PENDING = 'payment-pending',
  PROCESSING = 'payment-processing',
  SUCCESS = 'payment-success',
  FAILED = 'payment-failed',
  REVERSAL = 'payment-reversal',
  CASH_ON_DELIVERY = 'payment-cash-on-delivery',
  CASH = 'payment-cash',
  WALLET = 'payment-wallet',
  AWAITING_FOR_APPROVAL = 'payment-awaiting-for-approval',
}

registerEnumType(OrderStatusType, { name: 'OrderStatusType' });
registerEnumType(PaymentStatusType, { name: 'PaymentStatusType' });
registerEnumType(PaymentGatewayType, { name: 'PaymentGatewayType' });

// Definisikan WalletPoint dulu (sebagai export class agar bisa diakses jika perlu di luar file ini)
@InputType('WalletPointInputType', { isAbstract: true })
@ObjectType()
export class WalletPoint {
  @Field(() => ID)
  id: number;

  @Field(() => Int, { nullable: true })
  amount?: number;
}

@InputType('OrderInputType', { isAbstract: true })
@ObjectType()
export class Order extends CoreEntity {
  @Field({ nullable: true })
  tracking_number?: string;

  @Field(() => ID)
  customer_id: number;

  @Field({ nullable: true })
  customer_contact?: string;

  @Field({ nullable: true })
  customer_name?: string;

  @Field(() => User, { nullable: true })
  customer?: User;

  @Type(() => Order)
  @Field(() => Order, { nullable: true })
  parent_order?: Order;

  @Type(() => Order) // @Type hanya untuk item array, bukan array itu sendiri
  @Field(() => [Order], { nullable: true })
  children?: Order[];

  @Type(() => PaymentIntent)
  @Field(() => PaymentIntent, { nullable: true })
  payment_intent?: PaymentIntent;

  @Field(() => Int, { nullable: true })
  amount?: number;

  @Field(() => Int, { nullable: true })
  sales_tax?: number;

  @Field(() => Int, { nullable: true })
  total?: number;

  @Field(() => Int, { nullable: true })
  paid_total?: number;

  @Field({ nullable: true })
  parent_id?: number;

  @Field({ nullable: true })
  payment_id?: string;

  @Field({ nullable: true })
  order_status?: string;

  @Field({ nullable: true })
  payment_status?: string;

  @Field({ nullable: true })
  note?: string;

  @Field(() => PaymentGatewayType, { nullable: true })
  payment_gateway?: PaymentGatewayType;

  @Field(() => Coupon, { nullable: true })
  coupon?: Coupon;

  @Type(() => Shop)
  @Field(() => Shop, { nullable: true })
  shop?: Shop;

  @Field(() => Int, { nullable: true })
  discount?: number;

  @Field(() => Int, { nullable: true })
  delivery_fee?: number;

  @Field({ nullable: true })
  delivery_time?: string;

  @Type(() => Product) // @Type hanya untuk item array
  @Field(() => [Product], { nullable: true })
  products?: Product[];

  @Field(() => UserAddress, { nullable: true })
  billing_address?: UserAddress;

  @Field(() => UserAddress, { nullable: true })
  shipping_address?: UserAddress;

  @Field(() => Refund, { nullable: true })
  refund?: Refund;

  @Field(() => WalletPoint, { nullable: true }) // Sekarang WalletPoint sudah didefinisikan sebelumnya
  wallet_point?: WalletPoint;

  @Field({ nullable: true })
  altered_payment_gateway?: string | null;

  @Field({ nullable: true })
  language?: string;

  @Field(() => [String], { nullable: true })
  translated_languages?: string[];

  @Type(() => Review) // @Type hanya untuk item array
  @Field(() => [Review], { nullable: true })
  reviews?: Review[];
}

@InputType('OrderFileInputType', { isAbstract: true })
@ObjectType()
export class OrderFiles extends CoreEntity {
  @Field({ nullable: true })
  purchase_key?: string;

  @Field(() => Int, { nullable: true })
  digital_file_id?: number;

  @Field(() => Int)
  customer_id: number;

  @Field({ nullable: true })
  tracking_number?: string;

  @Field(() => Order, { nullable: true })
  order?: Order;

  @Field(() => DigitalFile, { nullable: true })
  file?: DigitalFile;
}