import { Field, InputType } from '@nestjs/graphql';
import { WhereHasConditions } from 'src/module/common/dto/generic-conditions.input';
import { QueryMyReportsHasTypeColumn } from './my-reports-columns.enum';
import { QueryMyReportsHasTypeWhereHasConditionsRelation } from './my-reports-has-type-relation.input';

@InputType()
export class QueryMyReportsHasTypeWhereHasConditions extends WhereHasConditions {
  @Field(() => QueryMyReportsHasTypeColumn, { nullable: true })
  column?: QueryMyReportsHasTypeColumn;

  @Field(() => [QueryMyReportsHasTypeWhereHasConditions], { nullable: true })
  AND?: QueryMyReportsHasTypeWhereHasConditions[];

  @Field(() => [QueryMyReportsHasTypeWhereHasConditions], { nullable: true })
  OR?: QueryMyReportsHasTypeWhereHasConditions[];

  @Field(() => QueryMyReportsHasTypeWhereHasConditionsRelation, { nullable: true })
  HAS?: QueryMyReportsHasTypeWhereHasConditionsRelation;
}