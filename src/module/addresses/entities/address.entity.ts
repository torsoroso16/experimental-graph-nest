import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { CoreEntity } from 'src/module/common/entities/core.entity';
import { GoogleMapLocation } from 'src/module/settings/entities/google-map-location.entity';
import { User } from 'src/module/users/entities/user.entity';

export enum AddressType {
  BILLING = 'billing',
  SHIPPING = 'shipping',
}

registerEnumType(AddressType, { name: 'AddressType' });

// Definisikan UserAddress dulu
@InputType('UserAddressInputType', { isAbstract: true })
@ObjectType()
export class UserAddress {
  @Field({ nullable: true })
  street_address?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  state?: string;

  @Field({ nullable: true })
  zip?: string;
}

// Baru definisikan Address
@InputType('AddressInputType', { isAbstract: true })
@ObjectType()
export class Address extends CoreEntity {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  default?: boolean;

  @Field(() => UserAddress, { nullable: true })
  address?: UserAddress;

  @Field(() => GoogleMapLocation, { nullable: true })
  location?: GoogleMapLocation;

  @Field(() => AddressType, { nullable: true })
  type?: AddressType;

  @Field(() => User, { nullable: true })
  customer?: User;
}