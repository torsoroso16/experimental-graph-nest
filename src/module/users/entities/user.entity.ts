import { ObjectType, InputType, Field, ID } from '@nestjs/graphql';
import { Address } from 'src/module/addresses/entities/address.entity';
import { CoreEntity } from 'src/module/common/entities/core.entity';
import { Order } from 'src/module/orders/entities/order.entity';
import { Refund } from 'src/module/refunds/entities/refund.entity';
import { Shop } from 'src/module/shops/entities/shop.entity';
import { Wallet } from 'src/module/wallets/entities/wallet.entity';
import { Profile } from './profile.entity';

@InputType('UserInputType', { isAbstract: true })
@ObjectType()
export class User extends CoreEntity {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  shop_id?: number;

  @Field(() => Profile, { nullable: true })
  profile?: Profile;

  @Field(() => [Shop], { nullable: true })
  shops?: Shop[];

  @Field(() => [Refund], { nullable: true })
  refunds?: Refund[];

  @Field(() => Shop, { nullable: true })
  managed_shop?: Shop;

  @Field({ nullable: true })
  is_active?: boolean = true;

  @Field(() => [Address], { nullable: true })
  address?: Address[];

  @Field(() => [Order], { nullable: true })
  orders?: Order[];

  @Field(() => Wallet, { nullable: true })
  wallet?: Wallet;

  @Field(() => [Permissions], { nullable: true })
  permissions?: Permissions[];

  @Field(() => Order, { nullable: true })
  last_order?: Order;
}

@InputType('PermissionsInputType', { isAbstract: true })
@ObjectType()
export class Permissions {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;
}