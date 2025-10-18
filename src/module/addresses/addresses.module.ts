import { Module } from '@nestjs/common';
import { AddressesService } from './services/addresses.service';
import { AddressesResolver } from './resolvers/addresses.resolver';

@Module({
  providers: [AddressesResolver, AddressesService],
})
export class AddressesModule {}
