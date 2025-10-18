import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { SortOrder } from 'src/module/common/dto/generic-conditions.input';

export enum QueryProductsOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryProductsOrderByColumn, {
  name: 'QueryProductsOrderByColumn',
});

@InputType()
export class QueryProductsOrderByOrderByClause {
  @Field(() => QueryProductsOrderByColumn)
  column: QueryProductsOrderByColumn;

  @Field(() => SortOrder)
  order: SortOrder;
}
