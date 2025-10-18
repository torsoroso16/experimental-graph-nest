import {
  ArgsType,
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { SortOrder } from 'src/module/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/module/common/dto/pagination.args';
import { PaginatorInfo } from 'src/module/common/dto/paginator-info.model';
import { OrderStatus } from '../entities/order-status.entity';

@ObjectType()
export class OrderStatusPaginator {
  @Field(() => [OrderStatus])
  data: OrderStatus[];

  @Field(() => PaginatorInfo)
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetOrderStatusesArgs extends PaginationArgs {
  @Field(() => [QueryOrderStatusesOrderByOrderByClause], { nullable: true })
  orderBy?: QueryOrderStatusesOrderByOrderByClause[];

  @Field(() => String, { nullable: true })
  text?: string;

  @Field(() => String, { nullable: true })
  language?: string;
}

@InputType()
export class QueryOrderStatusesOrderByOrderByClause {
  @Field(() => QueryOrderStatusesOrderByColumn, { nullable: true })
  column?: QueryOrderStatusesOrderByColumn;

  @Field(() => SortOrder, { nullable: true })
  order?: SortOrder;
}

export enum QueryOrderStatusesOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
  SERIAL = 'SERIAL',
}

registerEnumType(QueryOrderStatusesOrderByColumn, {
  name: 'QueryOrderStatusesOrderByColumn',
});
