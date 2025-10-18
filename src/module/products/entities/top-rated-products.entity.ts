import { Field, Float, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Attachment } from 'src/module/common/entities/attachment.entity';
import { CoreEntity } from 'src/module/common/entities/core.entity';

@InputType('TopRatedProductType', { isAbstract: true })
@ObjectType()
export class TopRatedProduct extends CoreEntity {
  // @Field(() => ID, { nullable: true })
  // id?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  slug?: string;

  @Field(() => Float, { nullable: true })
  regular_price?: number;

  @Field(() => Float, { nullable: true })
  sale_price?: number;

  @Field(() => Float, { nullable: true })
  min_price?: number;

  @Field(() => Float, { nullable: true })
  max_price?: number;

  @Field({ nullable: true })
  product_type?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int)
  type_id: number;

  @Field({ nullable: true })
  type_slug?: string;

  @Field(() => Int, { nullable: true })
  total_rating?: number;

  @Field(() => Int, { nullable: true })
  rating_count?: number;

  @Field(() => Float, { nullable: true })
  actual_rating?: number;

  @Field(() => Attachment, { nullable: true })
  image?: Attachment;
}
