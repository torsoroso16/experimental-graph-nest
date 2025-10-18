import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/module/common/entities/core.entity';

@InputType('CategoryWiseProductInputType', { isAbstract: true })
@ObjectType()
export class CategoryWiseProduct extends CoreEntity {
  @Field(() => ID, { nullable: true })
  category_id?: number;

  @Field({ nullable: true })
  category_name?: string;

  @Field({ nullable: true })
  shop_name?: string;

  @Field(() => Int, { nullable: true })
  product_count?: number;
}
