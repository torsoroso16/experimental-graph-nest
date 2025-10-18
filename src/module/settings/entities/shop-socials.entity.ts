import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ShopSocialInput', { isAbstract: true })
@ObjectType()
export class ShopSocials {
  @Field({ nullable: true }) icon?: string;
  @Field({ nullable: true }) url?: string;
}
