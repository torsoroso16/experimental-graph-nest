import { Field, Float, InputType, ObjectType } from '@nestjs/graphql';
import { Attachment } from 'src/module/common/entities/attachment.entity';
import { PopUpNotShow } from './popup-not-show.entity';

@InputType('PromoPopupInput', { isAbstract: true })
@ObjectType()
export class PromoPopup {
  @Field(() => Attachment, { nullable: true }) image?: Attachment;
  @Field({ nullable: true }) title?: string;
  @Field({ nullable: true }) description?: string;
  @Field(() => Float, { nullable: true }) popUpDelay?: number;
  @Field(() => Float, { nullable: true }) popUpExpiredIn?: number;
  @Field({ nullable: true }) isPopUpNotShow?: boolean;
  @Field(() => PopUpNotShow, { nullable: true }) popUpNotShow?: PopUpNotShow;
}
