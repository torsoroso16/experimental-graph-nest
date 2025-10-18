import { ArgsType, ObjectType, Field } from '@nestjs/graphql';
import { PaginationArgs } from 'src/module/common/dto/pagination.args';
import { PaginatorInfo } from 'src/module/common/dto/paginator-info.model';
import { Shop } from '../entities/shop.entity';

@ObjectType()
export class ShopPaginator {
  data: Shop[];
  paginatorInfo: PaginatorInfo;
  @Field({ nullable: true })
  dummy?: boolean;
}

@ArgsType()
export class GetShopsArgs extends PaginationArgs {
  orderBy?: string;
  text?: string;
  sortedBy?: string;
  is_active?: boolean;
}
