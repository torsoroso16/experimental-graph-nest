import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ShopSocials } from './shop-socials.entity';
import { Location } from './location.entity';

@InputType('ContactDetailsInput', { isAbstract: true })
@ObjectType()
export class ContactDetails {
  @Field(() => [ShopSocials], { nullable: true })
  socials?: ShopSocials[];

  @Field({ nullable: true }) contact?: string;
  @Field(() => Location, { nullable: true }) location?: Location;
  @Field({ nullable: true }) website?: string;
  @Field({ nullable: true }) emailAddress?: string;
}
