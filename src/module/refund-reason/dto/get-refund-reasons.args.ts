
import { ArgsType, ObjectType, Field } from '@nestjs/graphql';
import { PaginationArgs } from 'src/module/common/dto/pagination.args';
import { PaginatorInfo } from 'src/module/common/dto/paginator-info.model';
import { RefundReason } from '../entities/refund-reason.entity';

@ObjectType()
export class RefundReasonsPaginator {
  data: RefundReason[];
  paginatorInfo: PaginatorInfo;
  @Field({ nullable: true })
  dummy?: boolean;
}

@ArgsType()
export class GetRefundReasonsArgs extends PaginationArgs {
  search?: string;
  orderBy?: string;
  sortedBy?: string;
  language?: string;
  searchJoin?: string;

}