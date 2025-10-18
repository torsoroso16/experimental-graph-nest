import {
  ArgsType,
  InputType,
  ObjectType,
  registerEnumType,
  Field,
} from '@nestjs/graphql';
import {
  SortOrder,
  WhereGTEConditions,
  WhereHasConditions,
  WhereHasConditionsRelation,
} from 'src/module/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/module/common/dto/pagination.args';
import { PaginatorInfo } from 'src/module/common/dto/paginator-info.model';
import { Tag } from '../entities/tag.entity';

@ObjectType()
export class TagPaginator {
  data: Tag[];
  paginatorInfo: PaginatorInfo;
  @Field({ nullable: true })
  dummy?: boolean;
}

@ArgsType()
export class GetTagsArgs extends PaginationArgs {
  orderBy?: QueryTagsOrderByOrderByClause[];
  text?: string;
  name?: string;
  hasType?: QueryTagsHasTypeWhereHasConditions;
  language?: string;
}

@InputType()
export class QueryTagsOrderByOrderByClause {
  column: QueryTagsOrderByColumn;
  order: SortOrder;
  @Field({ nullable: true })
  dummy?: boolean;
}
@InputType()
export class QueryTagsHasTypeWhereHasConditions extends WhereHasConditions {
  column: QueryTagsHasTypeColumn;
  AND?: QueryTagsHasTypeWhereHasConditions[];
  OR?: QueryTagsHasTypeWhereHasConditions[];
  HAS?: QueryTagsHasTypeWhereHasConditionsRelation;
  @Field({ nullable: true })
  dummy?: boolean;
}
@InputType()
export class QueryTagsHasTypeWhereHasConditionsRelation extends WhereGTEConditions {
  condition: QueryTagsHasTypeWhereHasConditions;
  @Field({ nullable: true })
  dummy?: boolean;
}

export enum QueryTagsOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryTagsOrderByColumn, {
  name: 'QueryTagsOrderByColumn',
});

export enum QueryTagsHasTypeColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryTagsHasTypeColumn, {
  name: 'QueryTagsHasTypeColumn',
});
