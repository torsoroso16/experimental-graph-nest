import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from '../../common/entities/core.entity';
import { Attachment } from '../../common/entities/attachment.entity';
import { ShopSocials } from 'src/module/settings/entities/shop-socials.entity';

@InputType('AuthorInputType', { isAbstract: true })
@ObjectType()
export class Author extends CoreEntity {
  @Field()
  name: string;

  @Field({ nullable: true })
  is_approved?: boolean;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  quote?: string;

  @Field(() => Int, { nullable: true })
  products_count?: number;

  @Field({ nullable: true })
  born?: string;

  @Field({ nullable: true })
  death?: string;

  @Field({ nullable: true })
  languages?: string;

  @Field(() => [ShopSocials], { nullable: true })
  socials?: ShopSocials[];

  @Field(() => Attachment, { nullable: true })
  image?: Attachment;

  @Field(() => Attachment, { nullable: true })
  cover_image?: Attachment;

  @Field({ nullable: true })
  language?: string;

  @Field(() => [String], { nullable: true })
  translated_languages?: string[];
}
