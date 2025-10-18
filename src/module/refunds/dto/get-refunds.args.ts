import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';
import { PaginationArgs } from 'src/module/common/dto/pagination.args';
import { PaginatorInfo } from 'src/module/common/dto/paginator-info.model';
import { Refund } from '../entities/refund.entity';

@ObjectType()
export class RefundPaginator {
  @Field(() => [Refund])
  data: Refund[];

  @Field(() => PaginatorInfo)
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetRefundsArgs extends PaginationArgs {
  @Field({ nullable: true })
  orderBy?: string;

  @Field({ nullable: true })
  sortedBy?: string;

  @Field(() => Int, { nullable: true })
  customer_id?: number;

  @Field(() => Int, { nullable: true })
  shop_id?: number;

  @Field(() => Int, { nullable: true })
  order_id?: number;

  @Field({ nullable: true })
  search?: string;
}
