import { ArgsType } from '@nestjs/graphql';
import { CoreGetArguments } from 'src/module/common/dto/core-get-arguments.args';

@ArgsType()
export class GetAuthorArgs extends CoreGetArguments {
  language?: string;
}
