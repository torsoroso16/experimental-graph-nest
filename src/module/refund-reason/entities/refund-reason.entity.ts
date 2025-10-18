import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/module/common/entities/core.entity';

@InputType('RefundReasonInputType', { isAbstract: true })
@ObjectType()
export class RefundReason extends CoreEntity {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  language?: string;

  @Field(() => [String], { nullable: true })
  translated_languages?: string[];
}
