import { Module } from '@nestjs/common';
import { PaymentMethodService } from './services/payment-method.service';
import { PaymentMethodResolver } from './resolvers/payment-method.resolver';
import { PaymentModule } from 'src/module/payment/payment.module';
import { UsersModule } from '../users/users.module';
import { SettingsModule } from '../settings/settings.module';

@Module({
  imports: [PaymentModule, UsersModule, SettingsModule],
  providers: [PaymentMethodService, PaymentMethodResolver],
})
export class PaymentMethodModule {}
