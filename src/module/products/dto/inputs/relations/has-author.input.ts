import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { WhereHasArrayConditions, WhereHasConditionsRelation } from 'src/module/common/dto/generic-conditions.input';

export enum QueryProductsHasAuthorColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryProductsHasAuthorColumn, { name: 'QueryProductsHasAuthorColumn' });

@InputType()
export class QueryProductsHasAuthorWhereHasConditions extends WhereHasArrayConditions {
  @Field(() => QueryProductsHasAuthorColumn)
  column: QueryProductsHasAuthorColumn;

  @Field(() => [QueryProductsHasAuthorWhereHasConditions], { nullable: true })
  AND?: QueryProductsHasAuthorWhereHasConditions[];

  @Field(() => [QueryProductsHasAuthorWhereHasConditions], { nullable: true })
  OR?: QueryProductsHasAuthorWhereHasConditions[];

  @Field(() => QueryProductsHasAuthorWhereHasConditionsRelation, { nullable: true })
  HAS?: InstanceType<typeof QueryProductsHasAuthorWhereHasConditionsRelation>;
}

@InputType()
export class QueryProductsHasAuthorWhereHasConditionsRelation extends WhereHasConditionsRelation {
  @Field(() => QueryProductsHasAuthorWhereHasConditions, { nullable: true })
  condition?: QueryProductsHasAuthorWhereHasConditions;
}
