import { Field, InputType } from '@nestjs/graphql';
import { WhereHasConditions } from 'src/module/common/dto/generic-conditions.input';
import { QueryCategoriesHasTypeColumn } from './get-categories.args';
import { QueryCategoriesHasTypeWhereHasConditionsRelation } from './query-categories-has-type-where-has-conditions-relation.input';

@InputType()
export class QueryCategoriesHasTypeWhereHasConditions extends WhereHasConditions {
  @Field(() => QueryCategoriesHasTypeColumn)
  column: QueryCategoriesHasTypeColumn;

  @Field(() => [QueryCategoriesHasTypeWhereHasConditions], { nullable: true })
  AND?: QueryCategoriesHasTypeWhereHasConditions[];

  @Field(() => [QueryCategoriesHasTypeWhereHasConditions], { nullable: true })
  OR?: QueryCategoriesHasTypeWhereHasConditions[];

  @Field(() => QueryCategoriesHasTypeWhereHasConditionsRelation, { nullable: true })
  HAS?: QueryCategoriesHasTypeWhereHasConditionsRelation;
}
