import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PaginatorInfo {
  @Field(() => Int)
  count: number;

  @Field(() => Int)
  currentPage: number;

  @Field(() => Int, { nullable: true })
  firstItem: number;

  @Field()
  hasMorePages: boolean;

  @Field(() => Int, { nullable: true })
  lastItem: number;

  @Field(() => Int)
  lastPage: number;

  @Field(() => Int)
  perPage: number;

  @Field(() => Int)
  total: number;
}
