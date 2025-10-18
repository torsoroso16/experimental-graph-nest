import { Field, Float, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from '../../common/entities/core.entity';
import { Attachment } from '../../common/entities/attachment.entity';
import { Product } from './product.entity';

@InputType('VariationDigitalFileInputType', { isAbstract: true })
@ObjectType()
export class VariationDigitalFile extends CoreEntity {
  @Field(() => Int)
  attachment_id: number;

  @Field()
  url: string;
}

@InputType('VariationInputType', { isAbstract: true })
@ObjectType()
export class Variation extends CoreEntity {
  // @Field(() => ID)
  // id: number;

  @Field()
  title: string;

  @Field(() => Product, { nullable: true })
  product?: Product;

  @Field(() => Float)
  price: number;

  @Field(() => Attachment, { nullable: true })
  image?: Attachment;

  @Field({ nullable: true })
  sku?: string;

  @Field({ nullable: true })
  is_disable?: boolean;

  @Field({ nullable: true })
  is_digital?: boolean;

  @Field(() => Float, { nullable: true })
  sale_price?: number;

  @Field(() => Int)
  quantity: number;

  @Field(() => Int, { nullable: true })
  sold_quantity?: number;

  @Field(() => [VariationOption], { nullable: true })
  options?: VariationOption[];

  @Field(() => VariationDigitalFile, { nullable: true })
  digital_file?: VariationDigitalFile;
}

@InputType()
export class VariationInput extends Variation {}

@InputType('VariationOptionInputType', { isAbstract: true })
@ObjectType()
export class VariationOption {
  @Field()
  name: string;

  @Field()
  value: string;
}
