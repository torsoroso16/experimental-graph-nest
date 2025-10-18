import { Module } from '@nestjs/common';
import { OrdersService } from './services/orders.service';
import {
  GenerateExportUrlResolver,
  GenerateInvoiceDownloadResolver,
  OrderFileResolver,
  OrdersResolver,
} from './resolvers/orders.resolver';
import { PaymentModule } from 'src/module/payment/payment.module';
import { AuthorsModule } from 'src/module/authors/authors.module';
import { UsersModule } from 'src/module/users/users.module';

@Module({
  imports: [PaymentModule, UsersModule],
  providers: [
    OrdersResolver,
    OrdersService,
    OrderFileResolver,
    GenerateExportUrlResolver,
    GenerateInvoiceDownloadResolver,
  ],
})
export class OrdersModule {}
