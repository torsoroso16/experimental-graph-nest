import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from 'src/module/common/dto/generic-conditions.input';
import { QueryMyReportsOrderByColumn } from './my-reports-columns.enum';

@InputType()
export class QueryMyReportsOrderByOrderByClause {
  @Field(() => QueryMyReportsOrderByColumn, { nullable: true })
  column?: QueryMyReportsOrderByColumn;

  @Field(() => SortOrder)
  order: SortOrder;
}