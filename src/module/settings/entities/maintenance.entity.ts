import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Attachment } from 'src/module/common/entities/attachment.entity';

@InputType('MaintenanceInput', { isAbstract: true })
@ObjectType()
export class Maintenance {
  @Field({ nullable: true }) title?: string;
  @Field(() => Attachment, { nullable: true }) image?: Attachment;
  @Field({ nullable: true }) description?: string;
  @Field({ nullable: true }) start?: string;
  @Field({ nullable: true }) until?: string;
  @Field({ nullable: true }) buttonTitleOne?: string;
  @Field({ nullable: true }) newsLetterTitle?: string;
  @Field({ nullable: true }) buttonTitleTwo?: string;
  @Field({ nullable: true }) contactUsTitle?: string;
  @Field({ nullable: true }) aboutUsTitle?: string;
  @Field({ nullable: true }) newsLetterDescription?: string;
  @Field({ nullable: true }) aboutUsDescription?: string;
  @Field({ nullable: true }) isOverlayColor?: boolean;
  @Field({ nullable: true }) overlayColor?: string;
  @Field({ nullable: true }) overlayColorRange?: string;
}
