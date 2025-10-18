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
import { User } from '../entities/user.entity';

@ObjectType()
export class UserPaginator {
  @Field(() => [User])
  data: User[];

  @Field(() => PaginatorInfo)
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetUsersArgs extends PaginationArgs {
  @Field(() => [QueryUsersOrderByOrderByClause], { nullable: true })
  orderBy?: QueryUsersOrderByOrderByClause[];

  @Field({ nullable: true })
  text?: string;
}

@InputType()
export class QueryUsersOrderByOrderByClause {
  @Field(() => QueryUsersOrderByColumn)
  column: QueryUsersOrderByColumn;

  @Field(() => SortOrder)
  order: SortOrder;
}

export enum QueryUsersOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
  IS_ACTIVE = 'IS_ACTIVE',
}

registerEnumType(QueryUsersOrderByColumn, {
  name: 'QueryUsersOrderByColumn',
});
