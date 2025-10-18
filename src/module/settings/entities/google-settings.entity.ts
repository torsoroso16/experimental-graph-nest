import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('GoogleSettingsInputType', { isAbstract: true })
@ObjectType()
export class GoogleSettings {
  @Field({ nullable: true }) isEnable?: boolean;
  @Field({ nullable: true }) tagManagerId?: string;
}
