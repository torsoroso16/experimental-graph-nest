import { InputType, PartialType, Field } from '@nestjs/graphql';
import { SettingsOptions } from '../entities/settings-options.entity';

@InputType()
export class SettingsInput {
  options?: SettingsOptionsInput;
  language?: string;
  @Field({ nullable: true })
  dummy?: boolean;
}

@InputType()
export class SettingsOptionsInput extends PartialType(SettingsOptions) {}
