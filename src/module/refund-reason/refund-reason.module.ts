import { Module } from '@nestjs/common';
import { RefundReasonResolver } from './resolvers/refund-reason.resolver';
import { RefundReasonService } from './services/refund-reason.service';

@Module({
  providers: [RefundReasonResolver, RefundReasonService],
})
export class RefundReasonModule {}
