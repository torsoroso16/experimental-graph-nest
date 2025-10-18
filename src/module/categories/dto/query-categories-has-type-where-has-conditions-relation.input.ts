import { Field, InputType } from '@nestjs/graphql';
import { WhereHasConditionsRelation } from 'src/module/common/dto/generic-conditions.input';
import { QueryCategoriesHasTypeWhereHasConditions } from './query-categories-has-type-where-has-conditions.input';

@InputType()
export class QueryCategoriesHasTypeWhereHasConditionsRelation extends WhereHasConditionsRelation {
  @Field(() => QueryCategoriesHasTypeWhereHasConditions, { nullable: true })
  condition?: QueryCategoriesHasTypeWhereHasConditions;
}
