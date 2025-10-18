import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PushNotificationInput', { isAbstract: true })
@ObjectType()
export class PushNotification {
  @Field({ nullable: true }) order?: boolean;
  @Field({ nullable: true }) message?: boolean;
  @Field({ nullable: true }) storeNotice?: boolean;
}

@InputType('AllInputInput', { isAbstract: true })
@ObjectType()
export class AllInput {
  @Field(() => PushNotification, { nullable: true })
  all?: PushNotification;
}
