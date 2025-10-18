import { ArgsType, Field } from '@nestjs/graphql';
import { PaginationArgs } from 'src/module/common/dto/pagination.args';
import { QueryManufacturersOrderByOrderByClause } from './manufacturers-order-by.input';
import { QueryManufacturersHasTypeWhereHasConditions } from './manufacturers-has-type.input';

@ArgsType()
export class GetManufacturersArgs extends PaginationArgs {
  @Field(() => [QueryManufacturersOrderByOrderByClause], { nullable: true })
  orderBy?: QueryManufacturersOrderByOrderByClause[];

  @Field({ nullable: true })
  text?: string;

  @Field(() => QueryManufacturersHasTypeWhereHasConditions, { nullable: true })
  hasType?: QueryManufacturersHasTypeWhereHasConditions;

  @Field({ nullable: true })
  is_approved?: boolean;

  @Field({ nullable: true })
  language?: string;
}