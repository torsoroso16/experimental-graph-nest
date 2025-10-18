import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { WhereHasArrayConditions, WhereHasConditionsRelation } from 'src/module/common/dto/generic-conditions.input';

export enum QueryProductsHasTagsColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryProductsHasTagsColumn, { name: 'QueryProductsHasTagsColumn' });

@InputType()
export class QueryProductsHasTagsWhereHasConditions extends WhereHasArrayConditions {
  @Field(() => QueryProductsHasTagsColumn)
  column: QueryProductsHasTagsColumn;

  @Field(() => [QueryProductsHasTagsWhereHasConditions], { nullable: true })
  AND?: QueryProductsHasTagsWhereHasConditions[];

  @Field(() => [QueryProductsHasTagsWhereHasConditions], { nullable: true })
  OR?: QueryProductsHasTagsWhereHasConditions[];

  @Field(() => QueryProductsHasTagsWhereHasConditionsRelation, { nullable: true })
  HAS?: InstanceType<typeof QueryProductsHasTagsWhereHasConditionsRelation>;
}

@InputType()
export class QueryProductsHasTagsWhereHasConditionsRelation extends WhereHasConditionsRelation {
  @Field(() => QueryProductsHasTagsWhereHasConditions, { nullable: true })
  condition?: QueryProductsHasTagsWhereHasConditions;
}
