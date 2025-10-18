import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from '../../common/entities/core.entity';
import { Attachment } from '../../common/entities/attachment.entity';
import { ShopSocials } from 'src/module/settings/entities/shop-socials.entity';
import { Type } from '../../types/entities/type.entity';

@InputType('ManufacturerInputType', { isAbstract: true })
@ObjectType()
export class Manufacturer extends CoreEntity {
  @Field()
  name: string;

  @Field({ nullable: true })
  slug?: string;

  @Field(() => ID, { nullable: true })
  type_id?: number;

  @Field(() => Int, { nullable: true })
  products_count?: number;

  @Field(() => Type, { nullable: true })
  type?: Type;

  @Field({ nullable: true })
  is_approved?: boolean;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  website?: string;

  @Field(() => [ShopSocials], { nullable: 'itemsAndList' })
  socials?: ShopSocials[];

  @Field(() => Attachment, { nullable: true })
  image?: Attachment;

  @Field(() => Attachment, { nullable: true })
  cover_image?: Attachment;

  @Field({ nullable: true })
  language?: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  translated_languages?: string[];
}
