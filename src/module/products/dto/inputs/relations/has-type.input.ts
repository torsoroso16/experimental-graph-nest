import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { WhereHasConditions, WhereHasConditionsRelation } from 'src/module/common/dto/generic-conditions.input';

export enum QueryProductsHasTypeColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryProductsHasTypeColumn, { name: 'QueryProductsHasTypeColumn' });

@InputType()
export class QueryProductsHasTypeWhereHasConditions extends WhereHasConditions {
  @Field(() => QueryProductsHasTypeColumn)
  column: QueryProductsHasTypeColumn;

  @Field(() => [QueryProductsHasTypeWhereHasConditions], { nullable: true })
  AND?: QueryProductsHasTypeWhereHasConditions[];

  @Field(() => [QueryProductsHasTypeWhereHasConditions], { nullable: true })
  OR?: QueryProductsHasTypeWhereHasConditions[];

  // ✅ gunakan forward reference untuk menghindari ReferenceError
  @Field(() => QueryProductsHasTypeWhereHasConditionsRelation, { nullable: true })
  HAS?: InstanceType<typeof QueryProductsHasTypeWhereHasConditionsRelation>;
}

@InputType()
export class QueryProductsHasTypeWhereHasConditionsRelation extends WhereHasConditionsRelation {
  // ✅ gunakan fungsi () => Type agar GraphQL menunda evaluasi tipe
  @Field(() => QueryProductsHasTypeWhereHasConditions, { nullable: true })
  condition?: QueryProductsHasTypeWhereHasConditions;
}
