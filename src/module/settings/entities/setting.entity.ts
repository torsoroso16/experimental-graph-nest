import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/module/common/entities/core.entity';
import { SettingsOptions } from './settings-options.entity';

@InputType('SettingsInputType', { isAbstract: true })
@ObjectType()
export class Settings extends CoreEntity {
  @Field(() => SettingsOptions, { nullable: true })
  options?: SettingsOptions;

  @Field({ nullable: true })
  language?: string;

  @Field(() => [String], { nullable: true })
  translated_languages?: string[];
}
