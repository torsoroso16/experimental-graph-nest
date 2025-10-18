import {
  ObjectType,
  Field,
  Int,
  registerEnumType,
  ID,
  InputType,
  createUnionType,
} from '@nestjs/graphql';
import { AttributeValue } from 'src/module/attributes/entities/attribute-value.entity';
import { Category } from 'src/module/categories/entities/category.entity';
import { Attachment } from 'src/module/common/entities/attachment.entity';
import { CoreEntity } from 'src/module/common/entities/core.entity';
import { Order } from 'src/module/orders/entities/order.entity';
import { Shop } from 'src/module/shops/entities/shop.entity';
import { Tag } from 'src/module/tags/entities/tag.entity';
import { Type } from 'src/module/types/entities/type.entity';
import { Type as TypeTransformer } from 'class-transformer';
import { Author } from 'src/module/authors/entities/author.entity';
import { Manufacturer } from 'src/module/manufacturers/entities/manufacturer.entity';
import { Review } from 'src/module/reviews/entities/review.entity';
import { Variation } from './variation.entity';

enum ProductStatus {
  PUBLISH = 'publish',
  DRAFT = 'draft',
}

enum ProductType {
  SIMPLE = 'simple',
  VARIABLE = 'variable',
}

registerEnumType(ProductStatus, { name: 'ProductStatus' });
registerEnumType(ProductType, { name: 'ProductType' });

export const FileableUnion = createUnionType({
  name: 'FileableUnion',
  types: () => [Product, Variation],
  resolveType: (value) => {
    if ('name' in value) {
      return Product;
    }
    if ('title' in value) {
      return Variation;
    }
    return null;
  },
});

@ObjectType()
export class DigitalFile extends CoreEntity {
  @Field(() => Int)
  attachment_id: number;

  @Field(() => FileableUnion, { nullable: true })
  fileable?: Product | Variation;

  @Field()
  url: string;
}

// Definisikan OrderProductPivot dulu
@InputType('PivotInputType', { isAbstract: true })
@ObjectType()
export class OrderProductPivot {
  @Field(() => ID, { nullable: true })
  variation_option_id?: number;

  @Field(() => Int)
  order_quantity: number;

  @Field(() => Int)
  unit_price: number;

  @Field(() => Int)
  subtotal: number;
}

// Baru definisikan Product
@InputType('ProductInputType', { isAbstract: true })
@ObjectType()
export class Product extends CoreEntity {
  @Field()
  name: string;

  @Field()
  slug: string;

  @Field(() => Type, { nullable: true })
  type?: Type;

  @Field(() => ID)
  type_id: number;

  @Field(() => ProductType)
  product_type: ProductType;

  @Field(() => [Category], { nullable: true })
  categories?: Category[];

  @Field(() => [Tag], { nullable: true })
  tags?: Tag[];

  @Field(() => [AttributeValue], { nullable: true })
  variations?: AttributeValue[];

  @Field(() => [Variation], { nullable: true })
  variation_options?: Variation[];

  @Field(() => OrderProductPivot, { nullable: true }) // Sekarang OrderProductPivot sudah dikenali
  pivot?: OrderProductPivot;

  @Field(() => [Order], { nullable: true })
  orders?: Order[];

  @TypeTransformer(() => Shop)
  @Field(() => Shop, { nullable: true })
  shop?: Shop;

  @Field(() => Author, { nullable: true })
  author?: Author;

  @Field(() => Manufacturer, { nullable: true })
  manufacturer?: Manufacturer;

  @Field(() => ID, { nullable: true })
  shop_id?: number;

  @Field(() => ID, { nullable: true })
  author_id?: number;

  @Field(() => ID, { nullable: true })
  manufacturer_id?: number;

  @Field(() => [Product], { nullable: true })
  related_products?: Product[];

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  in_stock?: boolean;

  @Field({ nullable: true })
  is_taxable?: boolean;

  @Field({ nullable: true })
  is_digital?: boolean;

  @Field({ nullable: true })
  is_external?: boolean;

  @Field({ nullable: true })
  external_product_url?: string;

  @Field({ nullable: true })
  external_product_button_text?: string;

  @Field(() => Int, { nullable: true })
  sale_price?: number;

  @Field(() => Int, { nullable: true })
  max_price?: number;

  @Field(() => Int, { nullable: true })
  min_price?: number;

  @Field({ nullable: true })
  sku?: string;

  @Field(() => [Attachment], { nullable: true })
  gallery?: Attachment[];

  @Field(() => Attachment, { nullable: true })
  image?: Attachment;

  @Field(() => ProductStatus)
  status: ProductStatus;

  @Field({ nullable: true })
  height?: string;

  @Field({ nullable: true })
  length?: string;

  @Field({ nullable: true })
  width?: string;

  @Field(() => Int, { nullable: true })
  price?: number;

  @Field(() => Int)
  quantity: number;

  @Field()
  unit: string;

  @Field(() => Int, { nullable: true })
  ratings?: number;

  @Field()
  in_wishlist: boolean;

  @Field(() => [Review], { nullable: true })
  my_review?: Review[];

  @Field(() => [Video], { nullable: true })
  video?: Video[];

  @Field(() => Int, { nullable: true })
  in_flash_sale?: number;

  @Field(() => Int, { nullable: true })
  sold_quantity?: number;

  @Field({ nullable: true })
  language?: string;

  @Field(() => [String], { nullable: true })
  translated_languages?: string[];
}

// Definisikan Video dan Audio setelah Product dan OrderProductPivot
@InputType('VideoInputType', { isAbstract: true })
@ObjectType()
export class Video {
  @Field()
  url: string;
}

@InputType('AudioInputType', { isAbstract: true })
@ObjectType()
export class Audio {
  @Field()
  url: string;
}