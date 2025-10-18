import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Attachment } from 'src/module/common/entities/attachment.entity';
import { CoreEntity } from 'src/module/common/entities/core.entity';
import { TypeSettings } from './type-settings.entity';

@InputType('TypeInputType', { isAbstract: true })
@ObjectType()
export class Type extends CoreEntity {
  @Field()
  name: string;

  @Field({ nullable: true })
  slug?: string;

  @Field(() => Attachment, { nullable: true })
  image?: Attachment;

  @Field({ nullable: true })
  icon?: string;

  @Field(() => [Attachment], { nullable: true })
  banners?: Attachment[];

  @Field(() => [Attachment], { nullable: true })
  promotional_sliders?: Attachment[];

  @Field({ nullable: true })
  language?: string;

  @Field(() => [String], { nullable: true })
  translated_languages?: string[];

  @Field({ nullable: true })
  dummy?: boolean;

  @Field(() => TypeSettings, { nullable: true })
  settings?: TypeSettings;
}
