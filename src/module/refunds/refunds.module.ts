import { Module } from '@nestjs/common';
import { RefundsService } from './services/refunds.service';
import { RefundsResolver } from './resolvers/refunds.resolver';

@Module({
  providers: [RefundsResolver, RefundsService],
})
export class RefundsModule {}
