import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Attachment } from 'src/module/common/entities/attachment.entity';
import { CoreEntity } from 'src/module/common/entities/core.entity';
import { Product } from 'src/module/products/entities/product.entity';
import { Type } from 'src/module/types/entities/type.entity';

@InputType('CategoryInputType', { isAbstract: true })
@ObjectType()
export class Category extends CoreEntity {
  @Field()
  name: string;

  @Field()
  slug: string;

  @Field(() => ID, { nullable: true })
  parent_id?: number;

  @Field(() => Category, { nullable: true })
  parent?: Category;

  @Field(() => [Category], { nullable: 'itemsAndList' })
  children?: Category[];

  @Field(() => [Category], { nullable: 'itemsAndList' })
  sub_categories?: Category[];

  @Field(() => Int, { nullable: true })
  products_count?: number;

  @Field({ nullable: true })
  details?: string;

  @Field(() => Attachment, { nullable: true })
  image?: Attachment;

  @Field({ nullable: true })
  icon?: string;

  @Field(() => Type, { nullable: true })
  type?: Type;

  @Field(() => [Product], { nullable: 'itemsAndList' })
  products?: Product[];

  @Field()
  language: string;

  @Field(() => [String])
  translated_languages: string[];
}
