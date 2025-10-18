import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql';
import { PaginationArgs } from 'src/module/common/dto/pagination.args';
import { PaginatorInfo } from 'src/module/common/dto/paginator-info.model';
import { Product } from '../entities/product.entity';

import { PriceRange } from './inputs/price-range.input';
import { QueryProductsHasTypeWhereHasConditions } from './inputs/relations/has-type.input';
import { QueryProductsHasCategoriesWhereHasConditions } from './inputs/relations/has-categories.input';
import { QueryProductsHasTagsWhereHasConditions } from './inputs/relations/has-tags.input';
import { QueryProductsHasAuthorWhereHasConditions } from './inputs/relations/has-author.input';
import { QueryProductsHasManufacturerWhereHasConditions } from './inputs/relations/has-manufacturer.input';

@ArgsType()
export class GetProductsArgs extends PaginationArgs {
  @Field({ nullable: true })
  orderBy?: string;

  @Field({ nullable: true })
  sortedBy?: string;

  @Field({ nullable: true })
  searchJoin?: string;

  @Field({ nullable: true })
  text?: string;

  @Field({ nullable: true })
  status?: string;

  @Field(() => PriceRange, { nullable: true })
  max_price?: PriceRange;

  @Field(() => PriceRange, { nullable: true })
  min_price?: PriceRange;

  @Field(() => PriceRange, { nullable: true })
  price?: PriceRange;

  @Field(() => ID, { nullable: true })
  shop_id?: number;

  @Field(() => QueryProductsHasTypeWhereHasConditions, { nullable: true })
  hasType?: QueryProductsHasTypeWhereHasConditions;

  @Field(() => QueryProductsHasAuthorWhereHasConditions, { nullable: true })
  hasAuthor?: QueryProductsHasAuthorWhereHasConditions;

  @Field(() => QueryProductsHasManufacturerWhereHasConditions, { nullable: true })
  hasManufacturer?: QueryProductsHasManufacturerWhereHasConditions;

  @Field(() => QueryProductsHasCategoriesWhereHasConditions, { nullable: true })
  hasCategories?: QueryProductsHasCategoriesWhereHasConditions;

  @Field(() => QueryProductsHasTagsWhereHasConditions, { nullable: true })
  hasTags?: QueryProductsHasTagsWhereHasConditions;

  @Field({ nullable: true })
  search?: string;

  @Field({ nullable: true })
  date_range?: string;

  @Field({ nullable: true })
  language?: string;

  @Field({ nullable: true })
  product_type?: string;

  @Field({ nullable: true })
  flash_sale_builder?: boolean;

  @Field({ nullable: true })
  searchedByUser?: string;

  @Field({ nullable: true })
  author?: string;

  @Field({ nullable: true })
  manufacturer?: string;
}

@ObjectType()
export class ProductPaginator {
  @Field(() => [Product])
  data: Product[];

  @Field(() => PaginatorInfo)
  paginatorInfo: PaginatorInfo;
}
