import { Field, InputType } from '@nestjs/graphql';
import { WhereHasConditionsRelation } from 'src/module/common/dto/generic-conditions.input';

@InputType()
export class QueryManufacturersHasTypeWhereHasConditionsRelation extends WhereHasConditionsRelation {
  @Field(() => require('./manufacturers-has-type.input').QueryManufacturersHasTypeWhereHasConditions, { nullable: true })
  condition?: any;
}