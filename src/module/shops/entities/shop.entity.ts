import {
  ObjectType,
  Field,
  Int,
  ID,
  InputType,
  PickType,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { UserAddress } from 'src/module/addresses/entities/address.entity';
import { Attachment } from 'src/module/common/entities/attachment.entity';
import { CoreEntity } from 'src/module/common/entities/core.entity';
import { Refund } from 'src/module/refunds/entities/refund.entity';
import { Location } from 'src/module/settings/entities/location.entity';
import { ShopSocials } from 'src/module/settings/entities/shop-socials.entity';
import { Notifications } from 'src/module/users/entities/profile.entity';
import { User } from 'src/module/users/entities/user.entity';

@InputType('ShopInputType', { isAbstract: true })
@ObjectType()
export class Shop extends CoreEntity {
  @Field(() => Int)
  owner_id: number;
  owner: User;
  staffs?: User[];
  refunds?: Refund[];
  is_active?: boolean;
  @Field(() => Int)
  orders_count?: number;
  @Field(() => Int)
  products_count?: number;
  balance?: Balance;
  name?: string;
  slug?: string;
  description?: string;
  cover_image?: Attachment;
  logo?: Attachment;
  address?: UserAddress;
  settings?: ShopSettings;
  @Field(() => Float, { nullable: true })
  distance?: number;
  @Field(() => Float, { nullable: true })
  lat?: number;
  @Field(() => Float, { nullable: true })
  lng?: number;
  ownership_history?: Status;
}

@InputType('BalanceInputType', { isAbstract: true })
@ObjectType()
export class Balance {
  @Field(() => ID, { nullable: true })
  id?: number;
  admin_commission_rate: number;
  shop: Shop;
  total_earnings: number;
  withdrawn_amount: number;
  current_balance: number;
  payment_info?: PaymentInfo;
}
@InputType()
export class BalanceInput extends PickType(Balance, ['id', 'payment_info']) {}

@InputType('PaymentInfoInput', { isAbstract: true })
@ObjectType()
export class PaymentInfo {
  account?: number;
  name?: string;
  email?: string;
  bank?: string;
  @Field({ nullable: true })
  dummy?: boolean;
}

@InputType('ShopSettingsInputType', { isAbstract: true })
@ObjectType()
export class ShopSettings {
  socials?: ShopSocials[];
  contact?: string;
  location?: Location;
  website?: string;
  notifications?: Notifications;
  askForAQuote?: AskForAQuote;
  isShopUnderMaintenance?: string;
  shopMaintenance?: ShopMaintenance;
  @Field({ nullable: true })
  dummy?: boolean;
}

@InputType('AskForAQuoteInputType', { isAbstract: true })
@ObjectType()
export class AskForAQuote {
  enable: boolean;
  content: string;
  quote: string;
  @Field({ nullable: true })
  dummy?: boolean;
}
@InputType('ShopMaintenanceInputType', { isAbstract: true })
@ObjectType()
export class ShopMaintenance {
  image?: Attachment;
  title?: string;
  description?: string;
  start?: Date;
  until?: Date;
  @Field({ nullable: true })
  dummy?: boolean;
}

@InputType('StatusInputType', { isAbstract: true })
@ObjectType()
export class Status {
  status?: OwnerShipTransferStatus;
  @Field({ nullable: true })
  dummy?: boolean;
}
export enum OwnerShipTransferStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}
registerEnumType(OwnerShipTransferStatus, { name: 'OwnerShipTransferStatus' });
