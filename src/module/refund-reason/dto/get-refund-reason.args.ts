import { ArgsType, Field, ID } from '@nestjs/graphql';
import { CoreGetArguments } from 'src/module/common/dto/core-get-arguments.args';

@ArgsType()
export class GetRefundReasonArgs extends CoreGetArguments {
  // Kamu bisa aktifkan ini kalau ingin pakai filter by id atau slug juga:
  // @Field(() => ID, { nullable: true })
  // id?: number;

  // @Field({ nullable: true })
  // slug?: string;

  @Field({ nullable: true })
  language?: string;
}
