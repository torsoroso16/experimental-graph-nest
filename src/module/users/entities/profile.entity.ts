import { ObjectType, InputType, Field, ID } from '@nestjs/graphql';
import { Attachment } from 'src/module/common/entities/attachment.entity';
import { CoreEntity } from 'src/module/common/entities/core.entity';
import { User } from './user.entity';

// Definisikan class yang digunakan oleh Profile dulu
@InputType('NotificationsInputType', { isAbstract: true })
@ObjectType()
export class Notifications {
  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  enable?: boolean;
}

@InputType('SocialInputType', { isAbstract: true })
@ObjectType()
export class Social {
  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  link?: string;
}

// Baru definisikan Profile
@InputType('ProfileInputType', { isAbstract: true })
@ObjectType()
export class Profile extends CoreEntity {
  @Field(() => Attachment, { nullable: true })
  avatar?: Attachment;

  @Field({ nullable: true })
  bio?: string;

  @Field(() => [Social], { nullable: true })
  socials?: Social[];

  @Field({ nullable: true })
  contact?: string;

  @Field(() => User, { nullable: true })
  customer?: User;

  @Field(() => Notifications, { nullable: true })
  notifications?: Notifications;
}