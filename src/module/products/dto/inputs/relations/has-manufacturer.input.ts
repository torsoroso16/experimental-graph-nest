import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { WhereHasArrayConditions, WhereHasConditionsRelation } from 'src/module/common/dto/generic-conditions.input';

export enum QueryProductsHasManufacturerColumn {
  SLUG = 'SLUG',
}

registerEnumType(QueryProductsHasManufacturerColumn, { name: 'QueryProductsHasManufacturerColumn' });

@InputType()
export class QueryProductsHasManufacturerWhereHasConditions extends WhereHasArrayConditions {
  @Field(() => QueryProductsHasManufacturerColumn)
  column: QueryProductsHasManufacturerColumn;

  @Field(() => [QueryProductsHasManufacturerWhereHasConditions], { nullable: true })
  AND?: QueryProductsHasManufacturerWhereHasConditions[];

  @Field(() => [QueryProductsHasManufacturerWhereHasConditions], { nullable: true })
  OR?: QueryProductsHasManufacturerWhereHasConditions[];

  @Field(() => QueryProductsHasManufacturerWhereHasConditionsRelation, { nullable: true })
  HAS?: InstanceType<typeof QueryProductsHasManufacturerWhereHasConditionsRelation>;
}

@InputType()
export class QueryProductsHasManufacturerWhereHasConditionsRelation extends WhereHasConditionsRelation {
  @Field(() => QueryProductsHasManufacturerWhereHasConditions, { nullable: true })
  condition?: QueryProductsHasManufacturerWhereHasConditions;
}
