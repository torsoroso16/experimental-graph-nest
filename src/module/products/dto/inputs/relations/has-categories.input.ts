import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { WhereHasArrayConditions, WhereHasConditionsRelation } from 'src/module/common/dto/generic-conditions.input';

export enum QueryProductsHasCategoriesColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryProductsHasCategoriesColumn, { name: 'QueryProductsHasCategoriesColumn' });

@InputType()
export class QueryProductsHasCategoriesWhereHasConditions extends WhereHasArrayConditions {
  @Field(() => QueryProductsHasCategoriesColumn)
  column: QueryProductsHasCategoriesColumn;

  @Field(() => [QueryProductsHasCategoriesWhereHasConditions], { nullable: true })
  AND?: QueryProductsHasCategoriesWhereHasConditions[];

  @Field(() => [QueryProductsHasCategoriesWhereHasConditions], { nullable: true })
  OR?: QueryProductsHasCategoriesWhereHasConditions[];

  @Field(() => QueryProductsHasCategoriesWhereHasConditionsRelation, { nullable: true })
  HAS?: InstanceType<typeof QueryProductsHasCategoriesWhereHasConditionsRelation>;

}

@InputType()
export class QueryProductsHasCategoriesWhereHasConditionsRelation extends WhereHasConditionsRelation {
  @Field(() => QueryProductsHasCategoriesWhereHasConditions, { nullable: true })
  condition?: QueryProductsHasCategoriesWhereHasConditions;
}
