import { Module } from '@nestjs/common';
import { ShopsService } from './services/shops.service';
import { ShopsResolver } from './resolvers/shops.resolver';

@Module({
  providers: [ShopsResolver, ShopsService],
})
export class ShopsModule {}
