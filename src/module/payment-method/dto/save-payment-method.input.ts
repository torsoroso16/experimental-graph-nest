import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SavePaymentMethodInput {
  method_key: string;
  payment_intent?: string;
  save_card?: boolean;
  tracking_number?: string;
  payment_gateway?: string;
  @Field({ nullable: true })
  dummy?: boolean;
}
