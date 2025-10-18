import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('DeliveryTimeInputType', { isAbstract: true })
@ObjectType()
export class DeliveryTime {
  @Field() title: string;
  @Field() description: string;
}
