import { InterfaceType, Field } from '@nestjs/graphql';

@InterfaceType()
export abstract class CoreMutationOutput {
  @Field()
  message: string;

  @Field()
  success: boolean;
}
