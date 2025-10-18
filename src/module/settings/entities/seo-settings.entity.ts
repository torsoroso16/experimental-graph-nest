import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Attachment } from 'src/module/common/entities/attachment.entity';

@InputType('SeoSettingsInputType', { isAbstract: true })
@ObjectType()
export class SeoSettings {
  @Field({ nullable: true }) metaTitle?: string;
  @Field({ nullable: true }) metaDescription?: string;
  @Field({ nullable: true }) ogTitle?: string;
  @Field({ nullable: true }) ogDescription?: string;
  @Field(() => Attachment, { nullable: true }) ogImage?: Attachment;
  @Field({ nullable: true }) twitterHandle?: string;
  @Field({ nullable: true }) twitterCardType?: string;
  @Field({ nullable: true }) metaTags?: string;
  @Field({ nullable: true }) canonicalUrl?: string;
}
