import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from 'src/module/common/dto/generic-conditions.input';
import { QueryManufacturersOrderByColumn } from './manufacturers-columns.enum';

@InputType()
export class QueryManufacturersOrderByOrderByClause {
  @Field(() => QueryManufacturersOrderByColumn, { nullable: true })
  column?: QueryManufacturersOrderByColumn;

  @Field(() => SortOrder)
  order: SortOrder;
}