import { CoreEntity } from 'src/module/common/entities/core.entity';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('FeedbackInputType', { isAbstract: true })
@ObjectType()
export class Feedback extends CoreEntity {
  @Field(() => ID, { nullable: true })
  user_id?: string;

  @Field({ nullable: true })
  model_type?: string;

  @Field(() => ID)
  model_id: number;

  @Field({ nullable: true })
  positive?: boolean;

  @Field({ nullable: true })
  negative?: boolean;
}
