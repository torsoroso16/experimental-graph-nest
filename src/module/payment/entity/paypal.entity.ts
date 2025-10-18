import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PaypalOrderResponse {
  @Field()
  id: string;

  @Field()
  status: string;

  @Field(() => PaymentSource)
  payment_source: PaymentSource;

  @Field(() => [Link])
  links: Link[];
}

@ObjectType()
export class PaymentSource {
  @Field(() => Paypal, { nullable: true })
  paypal?: Paypal;
}

@ObjectType()
export class Link {
  @Field()
  href: string;

  @Field()
  rel: string;

  @Field()
  method: string;
}

@ObjectType()
export class AccessToken {
  @Field()
  scope: string;

  @Field()
  access_token: string;

  @Field()
  token_type: string;

  @Field()
  app_id: string;

  @Field()
  expires_in: number;

  @Field()
  nonce: string;
}

@ObjectType()
export class PaypalCaptureOrderResponse {
  @Field()
  id: string;

  @Field()
  status: string;

  @Field(() => PaymentSource)
  payment_source: PaymentSource;

  @Field(() => [PurchaseUnit])
  purchase_units: PurchaseUnit[];

  @Field(() => Payer)
  payer: Payer;

  @Field(() => [Link2])
  links: Link2[];
}

@ObjectType()
export class Paypal {
  @Field()
  email_address: string;

  @Field()
  account_id: string;

  @Field(() => Name)
  name: Name;

  @Field(() => Address)
  address: Address;
}

@ObjectType()
export class Name {
  @Field()
  given_name: string;

  @Field()
  surname: string;
}

@ObjectType()
export class Address {
  @Field()
  country_code: string;
}

@ObjectType()
export class PurchaseUnit {
  @Field()
  reference_id: string;

  @Field(() => Shipping)
  shipping: Shipping;

  @Field(() => Payments)
  payments: Payments;
}

@ObjectType()
export class Shipping {
  @Field(() => Name2)
  name: Name2;

  @Field(() => Address2)
  address: Address2;
}

@ObjectType()
export class Name2 {
  @Field()
  full_name: string;
}

@ObjectType()
export class Address2 {
  @Field()
  address_line_1: string;

  @Field()
  admin_area_2: string;

  @Field()
  admin_area_1: string;

  @Field()
  postal_code: string;

  @Field()
  country_code: string;
}

@ObjectType()
export class Payments {
  @Field(() => [Capture])
  captures: Capture[];
}

@ObjectType()
export class Capture {
  @Field()
  id: string;

  @Field()
  status: string;

  @Field(() => Amount)
  amount: Amount;

  @Field()
  final_capture: boolean;

  @Field(() => SellerProtection)
  seller_protection: SellerProtection;

  @Field(() => SellerReceivableBreakdown)
  seller_receivable_breakdown: SellerReceivableBreakdown;

  @Field(() => [Link])
  links: Link[];

  @Field()
  create_time: string;

  @Field()
  update_time: string;
}

@ObjectType()
export class Amount {
  @Field()
  currency_code: string;

  @Field()
  value: string;
}

@ObjectType()
export class SellerProtection {
  @Field()
  status: string;

  @Field(() => [String])
  dispute_categories: string[];
}

@ObjectType()
export class SellerReceivableBreakdown {
  @Field(() => GrossAmount)
  gross_amount: GrossAmount;

  @Field(() => PaypalFee)
  paypal_fee: PaypalFee;

  @Field(() => NetAmount)
  net_amount: NetAmount;
}

@ObjectType()
export class GrossAmount {
  @Field()
  currency_code: string;

  @Field()
  value: string;
}

@ObjectType()
export class PaypalFee {
  @Field()
  currency_code: string;

  @Field()
  value: string;
}

@ObjectType()
export class NetAmount {
  @Field()
  currency_code: string;

  @Field()
  value: string;
}

@ObjectType()
export class Payer {
  @Field(() => Name3)
  name: Name3;

  @Field()
  email_address: string;

  @Field()
  payer_id: string;

  @Field(() => Address3)
  address: Address3;
}

@ObjectType()
export class Name3 {
  @Field()
  given_name: string;

  @Field()
  surname: string;
}

@ObjectType()
export class Address3 {
  @Field()
  country_code: string;
}

@ObjectType()
export class Link2 {
  @Field()
  href: string;

  @Field()
  rel: string;

  @Field()
  method: string;
}
