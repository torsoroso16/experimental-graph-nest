import { Field, InputType } from '@nestjs/graphql';
import { WhereGTEConditions } from 'src/module/common/dto/generic-conditions.input';
import { QueryMyReportsHasTypeWhereHasConditions } from './get-my-reports.args';

@InputType()
export class QueryMyReportsHasTypeWhereHasConditionsRelation extends WhereGTEConditions {
  @Field(() => QueryMyReportsHasTypeWhereHasConditions)
  condition: QueryMyReportsHasTypeWhereHasConditions;
}
