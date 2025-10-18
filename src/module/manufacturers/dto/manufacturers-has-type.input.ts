import { Field, InputType } from '@nestjs/graphql';
import { WhereHasConditions } from 'src/module/common/dto/generic-conditions.input';
import { QueryManufacturersHasTypeColumn } from './manufacturers-columns.enum';
import { QueryManufacturersHasTypeWhereHasConditionsRelation } from './manufacturers-has-type-relation.input';

@InputType()
export class QueryManufacturersHasTypeWhereHasConditions extends WhereHasConditions {
  @Field(() => QueryManufacturersHasTypeColumn, { nullable: true })
  column?: QueryManufacturersHasTypeColumn;

  @Field(() => [QueryManufacturersHasTypeWhereHasConditions], { nullable: true })
  AND?: QueryManufacturersHasTypeWhereHasConditions[];

  @Field(() => [QueryManufacturersHasTypeWhereHasConditions], { nullable: true })
  OR?: QueryManufacturersHasTypeWhereHasConditions[];

  @Field(() => QueryManufacturersHasTypeWhereHasConditionsRelation, { nullable: true })
  HAS?: QueryManufacturersHasTypeWhereHasConditionsRelation;
}