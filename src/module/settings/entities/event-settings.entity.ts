import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Customer } from './customer.entity';
import { Vendor } from './vendor.entity';
import { Admin } from './admin.entity';

@InputType('EventSettingsInputType', { isAbstract: true })
@ObjectType()
export class EventSettings {
  @Field(() => Customer, { nullable: true })
  customer?: Customer;

  @Field(() => Vendor, { nullable: true })
  vendor?: Vendor;

  @Field(() => Admin, { nullable: true })
  admin?: Admin;
}
