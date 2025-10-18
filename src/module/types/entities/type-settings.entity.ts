import { Field, Float, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/module/common/entities/core.entity';
import { Attachment } from 'src/module/common/entities/attachment.entity';

/* ============================
   COMPACT TYPE SETTINGS
============================ */

@InputType('CompactTypeProductCardInputType', { isAbstract: true })
@ObjectType()
export class CompactTypeProductCardInput extends CoreEntity {
  @Field({ nullable: true })
  productCard?: string;

  @Field({ nullable: true })
  dummy?: boolean;
}

@InputType('CompactTypeSettingsInputType', { isAbstract: true })
@ObjectType()
export class CompactTypeSettingsInput extends CoreEntity {
  @Field(() => CompactTypeProductCardInput, { nullable: true })
  settings?: CompactTypeProductCardInput;

  @Field({ nullable: true })
  dummy?: boolean;
}

/* ============================
   COMPACT PRODUCT INPUT
============================ */

@InputType('CompactProductInputType', { isAbstract: true })
@ObjectType()
export class CompactProductInput extends CoreEntity {
  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Attachment, { nullable: true })
  image?: Attachment;

  @Field(() => Float, { nullable: true })
  regular_price?: number;

  @Field(() => Float, { nullable: true })
  sale_price?: number;

  @Field(() => Float, { nullable: true })
  min_price?: number;

  @Field(() => Float, { nullable: true })
  max_price?: number;

  @Field({ nullable: true })
  product_type?: string;

  @Field(() => Int, { nullable: true })
  quantity?: number;

  @Field({ nullable: true })
  is_external?: boolean;

  @Field({ nullable: true })
  unit?: string;

  @Field(() => Float, { nullable: true })
  price?: number;

  @Field({ nullable: true })
  external_product_url?: string;

  @Field({ nullable: true })
  status?: string;

  @Field(() => CompactTypeSettingsInput, { nullable: true })
  type?: CompactTypeSettingsInput;
}

/* ============================
   OTHER COMPACT INPUTS
============================ */

@InputType('CompactBestSellingInputType', { isAbstract: true })
@ObjectType()
export class CompactBestSellingInput extends CoreEntity {
  @Field({ nullable: true })
  enable?: boolean;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  dummy?: boolean;
}

@InputType('CompactDemoPopularProductsInputType', { isAbstract: true })
@ObjectType()
export class CompactDemoPopularProductsInput extends CoreEntity {
  @Field({ nullable: true })
  enable?: boolean;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  dummy?: boolean;
}

@InputType('CompactDemoCategoryInputType', { isAbstract: true })
@ObjectType()
export class CompactDemoCategoryInput extends CoreEntity {
  @Field({ nullable: true })
  enable?: boolean;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  dummy?: boolean;
}

@InputType('CompactDemoHandpickedProductsInputType', { isAbstract: true })
@ObjectType()
export class CompactDemoHandpickedProductsInput extends CoreEntity {
  @Field({ nullable: true })
  enable?: boolean;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  enableSlider?: boolean;

  @Field(() => [CompactProductInput], { nullable: true })
  products?: CompactProductInput[];

  @Field({ nullable: true })
  dummy?: boolean;
}

@InputType('CompactDemoNewArrivalInputType', { isAbstract: true })
@ObjectType()
export class CompactDemoNewArrivalInput extends CoreEntity {
  @Field({ nullable: true })
  enable?: boolean;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  dummy?: boolean;
}

@InputType('CompactDemoAuthorsInputType', { isAbstract: true })
@ObjectType()
export class CompactDemoAuthorsInput extends CoreEntity {
  @Field({ nullable: true })
  enable?: boolean;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  dummy?: boolean;
}

@InputType('CompactDemoManufacturesInputType', { isAbstract: true })
@ObjectType()
export class CompactDemoManufacturesInput extends CoreEntity {
  @Field({ nullable: true })
  enable?: boolean;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  dummy?: boolean;
}

/* ============================
   MAIN TYPE SETTINGS
============================ */

@InputType('TypeSettingsInput', { isAbstract: true })
@ObjectType()
export class TypeSettings {
  @Field({ nullable: true })
  isHome?: boolean;

  @Field({ nullable: true })
  layoutType?: string;

  @Field({ nullable: true })
  productCard?: string;

  @Field(() => CompactBestSellingInput, { nullable: true })
  bestSelling?: CompactBestSellingInput;

  @Field(() => CompactDemoPopularProductsInput, { nullable: true })
  popularProducts?: CompactDemoPopularProductsInput;

  @Field(() => CompactDemoCategoryInput, { nullable: true })
  category?: CompactDemoCategoryInput;

  @Field(() => CompactDemoHandpickedProductsInput, { nullable: true })
  handpickedProducts?: CompactDemoHandpickedProductsInput;

  @Field(() => CompactDemoNewArrivalInput, { nullable: true })
  newArrival?: CompactDemoNewArrivalInput;

  @Field(() => CompactDemoAuthorsInput, { nullable: true })
  authors?: CompactDemoAuthorsInput;

  @Field(() => CompactDemoManufacturesInput, { nullable: true })
  manufactures?: CompactDemoManufacturesInput;
}
