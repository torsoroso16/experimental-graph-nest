import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity } from 'src/module/common/entities/core.entity';

@InputType('OrderStatusInputType', { isAbstract: true })
@ObjectType()
export class OrderStatus extends CoreEntity {
  @Field()
  name: string;

  @Field()
  color: string;

  @Field(() => Int)
  serial: number;

  @Field()
  slug: string;

  @Field()
  language: string;

  @Field(() => [String])
  translated_languages: string[];
}
