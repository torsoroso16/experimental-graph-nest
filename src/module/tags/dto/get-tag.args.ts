import { ArgsType } from '@nestjs/graphql';
import { CoreGetArguments } from 'src/module/common/dto/core-get-arguments.args';

@ArgsType()
export class GetTagArgs extends CoreGetArguments {
  language?: string;
}
