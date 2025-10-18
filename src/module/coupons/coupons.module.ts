import { Module } from '@nestjs/common';
import { CouponsService } from './services/coupons.service';
import { CouponsResolver } from './resolvers/coupons.resolver';

@Module({
  providers: [CouponsResolver, CouponsService],
})
export class CouponsModule {}
