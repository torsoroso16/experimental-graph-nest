import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { GetPaymentIntentArgs } from '../dto/get-payment-intent.args';
import { PaymentIntent } from '../entities/payment-intent.entity';
import paymentIntentJson from '../payment-intent.json';

const paymentIntents = plainToInstance(PaymentIntent, paymentIntentJson as object[]);

@Injectable()
export class PaymentIntentService {
  private paymentIntents: PaymentIntent[] = paymentIntents;
  findOne(getPaymentIntentArgs: GetPaymentIntentArgs): PaymentIntent {
    return this.paymentIntents[0];
  }
}
