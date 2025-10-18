import { ArgsType, InputType, registerEnumType, Field } from '@nestjs/graphql';
import { SortOrder } from 'src/module/common/dto/generic-conditions.input';

@ArgsType()
export class GetTypesArgs {
  orderBy?: QueryTypesOrderByOrderByClause[];
  text?: string;
  language?: string;
}

@InputType()
export class QueryTypesOrderByOrderByClause {
  column: QueryTypesOrderByColumn;
  order: SortOrder;
  @Field({ nullable: true })
  dummy?: boolean;
}

export enum QueryTypesOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryTypesOrderByColumn, {
  name: 'QueryTypesOrderByColumn',
});
