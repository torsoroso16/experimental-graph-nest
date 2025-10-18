import {
  ArgsType,
  ObjectType,
  Field
} from '@nestjs/graphql';
import { PaginationArgs } from 'src/module/common/dto/pagination.args';
import { PaginatorInfo } from 'src/module/common/dto/paginator-info.model';
import { User } from '../entities/user.entity';

@ObjectType()
export class UserPaginator {
  data: User[];
  paginatorInfo: PaginatorInfo;
  @Field({ nullable: true })
  dummy?: boolean;
}

@ArgsType()
export class GetMyStaffsArgs extends PaginationArgs {
  search?: string;
  orderBy?: string;
  sortedBy?: string;
  searchJoin?: string;
}