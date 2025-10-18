import { ObjectType, Field, InputType, ID } from '@nestjs/graphql';
import { CoreEntity } from 'src/module/common/entities/core.entity';
import { Shop } from 'src/module/shops/entities/shop.entity';
import { AttributeValue } from './attribute-value.entity';

@InputType('AttributeInputType', { isAbstract: true })
@ObjectType()
export class Attribute extends CoreEntity {
  @Field()
  name: string;

  @Field(() => ID)
  shop_id: string;

  @Field(() => Shop)
  shop: Shop;

  @Field()
  slug: string;

  @Field(() => [AttributeValue])
  values: AttributeValue[];

  @Field({ nullable: true })
  language?: string;

  @Field(() => [String])
  translated_languages: string[];
}
