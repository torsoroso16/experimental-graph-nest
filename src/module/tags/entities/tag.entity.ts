import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Attachment } from 'src/module/common/entities/attachment.entity';
import { CoreEntity } from 'src/module/common/entities/core.entity';
import { Product } from 'src/module/products/entities/product.entity';
import { Type } from 'src/module/types/entities/type.entity';

@InputType('TagInputType', { isAbstract: true })
@ObjectType()
export class Tag extends CoreEntity {
  name: string;
  slug: string;
  @Field(() => Int)
  parent?: number;
  details?: string;
  image?: Attachment;
  icon?: string;
  type?: Type;
  products?: Product[];
  language: string;
  translated_languages: string[];
}
