import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/module/common/entities/core.entity';

@InputType('CategoryWiseProductSaleInputType', { isAbstract: true })
@ObjectType()
export class CategoryWiseProductSale extends CoreEntity {
  @Field(() => ID, { nullable: true })
  category_id?: number;

  @Field({ nullable: true })
  category_name?: string;

  @Field({ nullable: true })
  shop_name?: string;

  @Field(() => Int, { nullable: true })
  total_sales?: number;
}
