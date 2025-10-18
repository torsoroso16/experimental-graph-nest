import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import {
  WhereHasConditions,
  WhereHasConditionsRelation,
} from 'src/module/common/dto/generic-conditions.input';

@InputType()
export class QueryAuthorsHasTypeWhereHasConditions extends WhereHasConditions {
  @Field(() => QueryAuthorsHasTypeColumn)
  column: QueryAuthorsHasTypeColumn;

  @Field(() => [QueryAuthorsHasTypeWhereHasConditions], { nullable: true })
  AND?: QueryAuthorsHasTypeWhereHasConditions[];

  @Field(() => [QueryAuthorsHasTypeWhereHasConditions], { nullable: true })
  OR?: QueryAuthorsHasTypeWhereHasConditions[];

  @Field(() => QueryAuthorsHasTypeWhereHasConditionsRelation, { nullable: true })
  HAS?: QueryAuthorsHasTypeWhereHasConditionsRelation;
}

@InputType()
export class QueryAuthorsHasTypeWhereHasConditionsRelation extends WhereHasConditionsRelation {
  @Field(() => QueryAuthorsHasTypeWhereHasConditions, { nullable: true })
  condition?: QueryAuthorsHasTypeWhereHasConditions;
}

export enum QueryAuthorsHasTypeColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryAuthorsHasTypeColumn, {
  name: 'QueryAuthorsHasTypeColumn',
});
