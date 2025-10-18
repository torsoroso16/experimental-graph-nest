// review.entity.ts (Kembalikan ke versi lengkap)
import { CoreEntity } from 'src/module/common/entities/core.entity';
import { Product } from 'src/module/products/entities/product.entity';
import { User } from 'src/module/users/entities/user.entity';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Feedback } from 'src/module/feedback/entities/feedback.entity';
import { Attachment } from '../../common/entities/attachment.entity';
import { Order } from '../../orders/entities/order.entity';
import { Shop } from '../../shops/entities/shop.entity';
import { AbusiveReport } from './abusive-report.entity';

@InputType('ReviewInputType', { isAbstract: true })
@ObjectType()
export class Review extends CoreEntity {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  comment?: string;

  @Field(() => Shop, { nullable: true })
  shop?: Shop;

  @Field(() => Order, { nullable: true })
  order?: Order;

  @Field(() => User, { nullable: true })
  customer?: User;

  @Field(() => [Attachment], { nullable: true })
  photos?: Attachment[];

  @Field(() => User, { nullable: true })
  user?: User; // <-- Pastikan ini ada dan memiliki @Field

  @Field(() => Product, { nullable: true })
  product?: Product;

  @Field(() => [Feedback], { nullable: true })
  feedbacks?: Feedback[];

  @Field(() => Feedback, { nullable: true })
  my_feedback?: Feedback;

  @Field({ nullable: true })
  positive_feedbacks_count?: number;

  @Field({ nullable: true })
  negative_feedbacks_count?: number;

  @Field(() => ID)
  user_id: number;

  @Field(() => ID)
  product_id: number;

  @Field(() => ID)
  rating: number;

  @Field(() => ID)
  shop_id: string;

  @Field({ nullable: true })
  variation_option_id?: string;

  @Field({ nullable: true })
  abusive_reports_count?: number;

  @Field(() => [AbusiveReport], { nullable: true })
  abusive_reports?: AbusiveReport[];
}