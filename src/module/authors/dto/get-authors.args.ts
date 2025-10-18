import {
  ArgsType,
  Field,
  ObjectType,
  InputType,
  registerEnumType,
} from '@nestjs/graphql';
import { PaginationArgs } from 'src/module/common/dto/pagination.args';
import { PaginatorInfo } from 'src/module/common/dto/paginator-info.model';
import { SortOrder } from 'src/module/common/dto/generic-conditions.input';
import { Author } from '../entities/author.entity';

@ObjectType()
export class AuthorPaginator {
  @Field(() => [Author])
  data: Author[];

  @Field(() => PaginatorInfo)
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetAuthorsArgs extends PaginationArgs {
  @Field(() => [QueryAuthorsOrderByOrderByClause], { nullable: true })
  orderBy?: QueryAuthorsOrderByOrderByClause[];

  @Field({ nullable: true })
  text?: string;

  @Field(() => Boolean, { nullable: true })
  is_approved?: boolean;

  @Field(() => String, { nullable: true })
  language?: string;
}

@InputType()
export class QueryAuthorsOrderByOrderByClause {
  @Field(() => QueryAuthorsOrderByColumn, { nullable: true })
  column?: QueryAuthorsOrderByColumn;

  @Field(() => SortOrder, { nullable: true })
  order?: SortOrder;
}

export enum QueryAuthorsOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
  ID = 'ID',
}

registerEnumType(QueryAuthorsOrderByColumn, {
  name: 'QueryAuthorsOrderByColumn',
});
