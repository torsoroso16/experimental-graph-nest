import { Module } from '@nestjs/common';
import { PaymentIntentService } from './services/payment-intent.service';
import { PaymentIntentResolver } from './resolvers/payment-intent.resolver';

@Module({
  providers: [PaymentIntentService, PaymentIntentResolver],
})
export class PaymentIntentModule {}
