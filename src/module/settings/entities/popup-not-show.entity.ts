import { Field, Float, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PopUpNotShowInput', { isAbstract: true })
@ObjectType()
export class PopUpNotShow {
  @Field({ nullable: true }) title?: string;
  @Field(() => Float, { nullable: true }) popUpExpiredIn?: number;
}
