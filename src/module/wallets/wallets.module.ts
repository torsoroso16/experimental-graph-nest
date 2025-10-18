import { Module } from '@nestjs/common';
import { WalletsService } from './services/wallets.service';
import { WalletsResolver } from './resolvers/wallets.resolver';

@Module({
  providers: [WalletsResolver, WalletsService],
})
export class WalletsModule {}
