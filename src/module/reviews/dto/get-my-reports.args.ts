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
  WhereHasConditions,
} from 'src/module/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/module/common/dto/pagination.args';
import { PaginatorInfo } from 'src/module/common/dto/paginator-info.model';
import { AbusiveReport } from '../entities/abusive-report.entity';
import { QueryMyReportsHasTypeWhereHasConditionsRelation } from './query-my-reports-has-type-wherehasconditions-relation.input';

@ObjectType()
export class MyReportPaginator {
  @Field(() => [AbusiveReport])
  data: AbusiveReport[];

  @Field(() => PaginatorInfo)
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetMyReportsArgs extends PaginationArgs {
  @Field(() => [QueryMyReportsOrderByOrderByClause], { nullable: true })
  orderBy?: QueryMyReportsOrderByOrderByClause[];

  @Field(() => ID, { nullable: true })
  product_id?: string;

  @Field(() => ID, { nullable: true })
  shop_id?: string;

  @Field({ nullable: true })
  rating?: number;
}

@InputType()
export class QueryMyReportsOrderByOrderByClause {
  @Field(() => QueryMyReportsOrderByColumn)
  column: QueryMyReportsOrderByColumn;

  @Field(() => SortOrder)
  order: SortOrder;
}

@InputType()
export class QueryMyReportsHasTypeWhereHasConditions extends WhereHasConditions {
  @Field(() => QueryMyReportsHasTypeColumn)
  column: QueryMyReportsHasTypeColumn;

  @Field(() => [QueryMyReportsHasTypeWhereHasConditions], { nullable: true })
  AND?: QueryMyReportsHasTypeWhereHasConditions[];

  @Field(() => [QueryMyReportsHasTypeWhereHasConditions], { nullable: true })
  OR?: QueryMyReportsHasTypeWhereHasConditions[];

  // Import dari file lain agar tidak circular
  @Field(() => QueryMyReportsHasTypeWhereHasConditionsRelation, { nullable: true })
  HAS?: QueryMyReportsHasTypeWhereHasConditionsRelation;
}

export enum QueryMyReportsOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryMyReportsOrderByColumn, {
  name: 'QueryMyReportsOrderByColumn',
});

export enum QueryMyReportsHasTypeColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryMyReportsHasTypeColumn, {
  name: 'QueryMyReportsHasTypeColumn',
});
