import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('FacebookSettingsInputType', { isAbstract: true })
@ObjectType()
export class FacebookSettings {
  @Field({ nullable: true }) isEnable?: boolean;
  @Field({ nullable: true }) appId?: string;
  @Field({ nullable: true }) pageId?: string;
}
