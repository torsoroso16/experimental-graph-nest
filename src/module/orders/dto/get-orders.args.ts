import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql';
import { PaginationArgs } from 'src/module/common/dto/pagination.args';
import { PaginatorInfo } from 'src/module/common/dto/paginator-info.model';
import { Order } from '../entities/order.entity';
import { SortOrder } from 'src/module/common/dto/generic-conditions.input';

@ObjectType()
export class OrderPaginator {
  @Field(() => [Order])
  data: Order[];

  @Field(() => PaginatorInfo)
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetOrdersArgs extends PaginationArgs {
  @Field(() => String, { nullable: true })
  tracking_number?: string;

  @Field(() => String, { nullable: true })
  orderBy?: string; // bisa diubah ke enum jika kamu punya kolom tertentu

  @Field(() => SortOrder, { nullable: true })
  sortedBy?: SortOrder;

  @Field(() => ID, { nullable: true })
  customer_id?: number;

  @Field(() => ID, { nullable: true })
  shop_id?: number;
}
