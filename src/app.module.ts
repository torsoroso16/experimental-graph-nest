import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';

// feature Module
import { UsersModule } from './module/users/users.module';
import { ProductsModule } from './module/products/products.module';
import { OrdersModule } from './module/orders/orders.module';
import { SettingsModule } from './module/settings/settings.module';
import { CouponsModule } from './module/coupons/coupons.module';
import { CategoriesModule } from './module/categories/categories.module';
import { AttributesModule } from './module/attributes/attributes.module';
import { AddressesModule } from './module/addresses/addresses.module';
import { ShopsModule } from './module/shops/shops.module';
import { TypesModule } from './module/types/types.module';
import { TagsModule } from './module/tags/tags.module';
// import { FaqsModule } from './module/faqs/faqs.module';
// import { UploadsModule } from './module/uploads/uploads.module';
// import { WithdrawsModule } from './module/withdraws/withdraws.module';
// import { TaxesModule } from './module/taxes/taxes.module';
// import { ShippingsModule } from './module/shippings/shippings.module';
// import { AnalyticsModule } from './module/analytics/analytics.module';
// import { ImportsModule } from './module/imports/imports.module';
import { WalletsModule } from './module/wallets/wallets.module';
import { RefundsModule } from './module/refunds/refunds.module';
import { AuthorsModule } from './module/authors/authors.module';
import { ManufacturersModule } from './module/manufacturers/manufacturers.module';
// import { QuestionsModule } from './module/questions/questions.module';
import { FeedbackModule } from './module/feedback/feedback.module';
import { ReviewsModule } from './module/reviews/reviews.module';
import { PaymentModule } from './module/payment/payment.module';
import { PaymentMethodModule } from './module/payment-method/payment-method.module';
// import { StripeModule } from 'nestjs-stripe';
import { PaymentIntentModule } from './module/payment-intent/payment-intent.module';
// import { StoreNoticesModule } from './module/store-notices/store-notices.module';
// import { MessagesModule } from './module/messages/messages.module';
// import { ConversationsModule } from './module/conversations/conversations.module';
// import { AiModule } from './module/ai/ai.module';
// import { RefundPoliciesModule } from './module/refund-policies/refund-policies.module';
import { RefundReasonModule } from './module/refund-reason/refund-reason.module';
// import { TermsAndConditionModule } from './module/terms-conditions/terms-conditions.module';
// import { NotifyLogsModule } from './module/notify-log/notify-logs.module';
// import { FlashSaleModule } from './module/flash-sale/flash-sale.module';
// import { FlashSaleRequestModule } from './module/flash-sale-requests/flash-sale-request.module';
// import { BecameSellerModule } from './module/became-seller/became-seller.module';
// import { OwnershipTransferModule } from './module/ownership-transfer/ownership-transfer.module';

// import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    // StripeModule.forRoot({
    //   apiKey: process.env.STRIPE_API_KEY,
    //   apiVersion: '2022-11-15',
    // }),
    UsersModule,
    ProductsModule,
    OrdersModule,
    SettingsModule,
    CouponsModule,
    CategoriesModule,
    AttributesModule,
    AddressesModule,
    ShopsModule,
    TypesModule,
    TagsModule,
    // FaqsModule,
    // UploadsModule,
    // CommonModule,
    // WithdrawsModule,
    // TaxesModule,
    // ShippingsModule,
    // AnalyticsModule,
    // ImportsModule,
    WalletsModule,
    RefundsModule,
    AuthorsModule,
    ManufacturersModule,
    FeedbackModule,
    // QuestionsModule,
    ReviewsModule,
    PaymentModule,
    PaymentMethodModule,
    PaymentIntentModule,
    // StoreNoticesModule,
    // MessagesModule,
    // ConversationsModule,
    // AiModule,
    // RefundPoliciesModule,
    RefundReasonModule,
    // TermsAndConditionModule,
    // NotifyLogsModule,
    // FlashSaleModule,
    // FlashSaleRequestModule,
    // BecameSellerModule,
    // OwnershipTransferModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}