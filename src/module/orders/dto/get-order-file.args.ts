import {
  ArgsType,
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { PaginationArgs } from 'src/module/common/dto/pagination.args';
import { PaginatorInfo } from 'src/module/common/dto/paginator-info.model';
import { OrderFiles } from '../entities/order.entity';
import { SortOrder } from '../../common/dto/generic-conditions.input';

@ObjectType()
export class OrderedFilePaginator {
  @Field(() => [OrderFiles])
  data: OrderFiles[];

  @Field(() => PaginatorInfo)
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetOrderFilesPaginator extends PaginationArgs {
  @Field(() => [QueryOrderFilesOrderByOrderByClause], { nullable: true })
  orderBy?: QueryOrderFilesOrderByOrderByClause[];
}

@InputType()
export class QueryOrderFilesOrderByOrderByClause {
  @Field(() => QueryOrderFilesOrderByColumn, { nullable: true })
  column?: QueryOrderFilesOrderByColumn;

  @Field(() => SortOrder)
  order: SortOrder;
}

export enum QueryOrderFilesOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryOrderFilesOrderByColumn, {
  name: 'QueryOrderFilesOrderByColumn',
});
