import {
  ArgsType,
  Field,
  ID,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import {
  SortOrder,
} from 'src/module/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/module/common/dto/pagination.args';
import { PaginatorInfo } from 'src/module/common/dto/paginator-info.model';
import { Category } from '../entities/category.entity';

// ✅ Import dari file baru
import { QueryCategoriesHasTypeWhereHasConditions } from './query-categories-has-type-where-has-conditions.input';

// -----------------------------------------------
// ObjectType untuk paginator
// -----------------------------------------------
@ObjectType()
export class CategoryPaginator {
  @Field(() => [Category])
  data: Category[];

  @Field(() => PaginatorInfo)
  paginatorInfo: PaginatorInfo;
}

// -----------------------------------------------
// ArgsType utama
// -----------------------------------------------
@ArgsType()
export class GetCategoriesArgs extends PaginationArgs {
  @Field(() => [QueryCategoriesOrderByOrderByClause], { nullable: true })
  orderBy?: QueryCategoriesOrderByOrderByClause[];

  @Field({ nullable: true })
  text?: string;

  @Field(() => QueryCategoriesHasTypeWhereHasConditions, { nullable: true })
  hasType?: QueryCategoriesHasTypeWhereHasConditions;

  @Field({ nullable: true })
  name?: string;

  @Field(() => ID, { nullable: true })
  parent?: number = null;

  @Field({ nullable: true })
  language?: string;
}

// -----------------------------------------------
// InputType dan Enum untuk orderBy
// -----------------------------------------------
@InputType()
export class QueryCategoriesOrderByOrderByClause {
  @Field(() => QueryCategoriesOrderByColumn)
  column: QueryCategoriesOrderByColumn;

  @Field(() => SortOrder)
  order: SortOrder;
}

export enum QueryCategoriesOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryCategoriesOrderByColumn, {
  name: 'QueryCategoriesOrderByColumn',
});

export enum QueryCategoriesHasTypeColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryCategoriesHasTypeColumn, {
  name: 'QueryCategoriesHasTypeColumn',
});
