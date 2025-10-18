import { Field, InputType } from '@nestjs/graphql';
import { WhereHasConditionsRelation } from 'src/module/common/dto/generic-conditions.input';

@InputType()
export class QueryMyReportsHasTypeWhereHasConditionsRelation extends WhereHasConditionsRelation {
  @Field(() => require('./my-reports-has-type.input').QueryMyReportsHasTypeWhereHasConditions, { nullable: true })
  condition?: any; // Menggunakan any sementara untuk menghindari circular dependency
}