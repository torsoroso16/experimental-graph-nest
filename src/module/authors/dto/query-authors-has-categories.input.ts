import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import {
  WhereHasConditions,
  WhereHasConditionsRelation,
} from 'src/module/common/dto/generic-conditions.input';

@InputType()
export class QueryAuthorsHasCategoriesWhereHasConditions extends WhereHasConditions {
  @Field(() => QueryAuthorsHasCategoriesColumn, { nullable: true })
  column?: QueryAuthorsHasCategoriesColumn;

  @Field(() => [QueryAuthorsHasCategoriesWhereHasConditions], { nullable: true })
  AND?: QueryAuthorsHasCategoriesWhereHasConditions[];

  @Field(() => [QueryAuthorsHasCategoriesWhereHasConditions], { nullable: true })
  OR?: QueryAuthorsHasCategoriesWhereHasConditions[];

  @Field(() => QueryAuthorsHasCategoriesWhereHasConditionsRelation, { nullable: true })
  HAS?: QueryAuthorsHasCategoriesWhereHasConditionsRelation;
}

@InputType()
export class QueryAuthorsHasCategoriesWhereHasConditionsRelation extends WhereHasConditionsRelation {
  @Field(() => QueryAuthorsHasCategoriesWhereHasConditions, { nullable: true })
  condition?: QueryAuthorsHasCategoriesWhereHasConditions;
}

export enum QueryAuthorsHasCategoriesColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryAuthorsHasCategoriesColumn, {
  name: 'QueryAuthorsHasCategoriesColumn',
});
