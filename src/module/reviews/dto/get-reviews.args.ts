import {
  ArgsType,
  Field,
  ID,
  InputType,
  Int,
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
import { Review } from '../entities/review.entity';
import { AbusiveReport } from '../entities/abusive-report.entity';

@ObjectType()
export class ReviewPaginator {
  data: Review[];
  paginatorInfo: PaginatorInfo;
  abusive_reports?: AbusiveReport[];
  @Field({ nullable: true })
  dummy?: boolean;
}

@ArgsType()
export class GetReviewsArgs extends PaginationArgs {
  orderBy?: QueryReviewsOrderByOrderByClause[];
  @Field(() => ID)
  product_id?: string;
  @Field(() => ID)
  shop_id?: string;
  rating?: number;
}

@InputType()
export class QueryReviewsOrderByOrderByClause {
  column: QueryReviewsOrderByColumn;
  order: SortOrder;
  @Field({ nullable: true })
  dummy?: boolean;
}

@InputType()
export class QueryReviewsHasTypeWhereHasConditions extends WhereHasConditions {
  column: QueryReviewsHasTypeColumn;
  AND?: QueryReviewsHasTypeWhereHasConditions[];
  OR?: QueryReviewsHasTypeWhereHasConditions[];
  HAS?: QueryReviewsHasTypeWhereHasConditionsRelation;
  @Field({ nullable: true })
  dummy?: boolean;
}

@InputType()
export class QueryReviewsHasTypeWhereHasConditionsRelation extends WhereGTEConditions {
  condition: QueryReviewsHasTypeWhereHasConditions;
  @Field({ nullable: true })
  dummy?: boolean;
}

export enum QueryReviewsOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
  RATING = 'RATING',
}

registerEnumType(QueryReviewsOrderByColumn, {
  name: 'QueryReviewsOrderByColumn',
});

export enum QueryReviewsHasTypeColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryReviewsHasTypeColumn, {
  name: 'QueryReviewsHasTypeColumn',
});
