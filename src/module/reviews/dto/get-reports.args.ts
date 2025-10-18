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
  WhereGTEConditions,
  WhereHasConditions,
} from 'src/module/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/module/common/dto/pagination.args';
import { PaginatorInfo } from 'src/module/common/dto/paginator-info.model';
import { AbusiveReport } from '../entities/abusive-report.entity';

@ObjectType()
export class ReportPaginator {
  @Field(() => [AbusiveReport])
  data: AbusiveReport[];

  @Field(() => PaginatorInfo)
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetReportsArgs extends PaginationArgs {
  @Field(() => [QueryReportsOrderByOrderByClause], { nullable: true })
  orderBy?: QueryReportsOrderByOrderByClause[];

  @Field(() => ID)
  product_id?: string;

  @Field(() => ID)
  shop_id?: string;

  @Field({ nullable: true })
  rating?: number;
}

@InputType()
export class QueryReportsOrderByOrderByClause {
  @Field(() => QueryReportsOrderByColumn)
  column: QueryReportsOrderByColumn;

  @Field(() => SortOrder)
  order: SortOrder;
}

@InputType()
export class QueryReportsHasTypeWhereHasConditions extends WhereHasConditions {
  @Field(() => QueryReportsHasTypeColumn)
  column: QueryReportsHasTypeColumn;

  @Field(() => [QueryReportsHasTypeWhereHasConditions], { nullable: true })
  AND?: QueryReportsHasTypeWhereHasConditions[];

  @Field(() => [QueryReportsHasTypeWhereHasConditions], { nullable: true })
  OR?: QueryReportsHasTypeWhereHasConditions[];

  @Field(() => QueryReportsHasTypeWhereHasConditionsRelation, { nullable: true })
  HAS?: QueryReportsHasTypeWhereHasConditionsRelation;
}

@InputType()
export class QueryReportsHasTypeWhereHasConditionsRelation extends WhereGTEConditions {
  @Field(() => QueryReportsHasTypeWhereHasConditions)
  condition: QueryReportsHasTypeWhereHasConditions;
}

export enum QueryReportsOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryReportsOrderByColumn, {
  name: 'QueryReportsOrderByColumn',
});

export enum QueryReportsHasTypeColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryReportsHasTypeColumn, {
  name: 'QueryReportsHasTypeColumn',
});