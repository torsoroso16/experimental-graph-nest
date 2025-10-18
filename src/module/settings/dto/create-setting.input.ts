import { InputType, ObjectType, OmitType, Field } from '@nestjs/graphql';
import { CoreMutationOutput } from 'src/module/common/dto/core-mutation-output.model';
import { Settings } from '../entities/setting.entity';

@InputType()
export class CreateSettingsInput extends OmitType(Settings, [
  'created_at',
  'updated_at',
]) {}
@InputType()
export class ContactInput {
  subject: string;
  email: string;
  name: string;
  description: string;
  @Field({ nullable: true })
  dummy?: boolean;
}

@ObjectType()
export class ContactResponse extends CoreMutationOutput {}
