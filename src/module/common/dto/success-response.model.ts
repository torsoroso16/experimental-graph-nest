import { ObjectType } from '@nestjs/graphql';
import { CoreMutationOutput } from './core-mutation-output.model';

@ObjectType({ implements: () => [CoreMutationOutput] })
export class SuccessResponse extends CoreMutationOutput {}
