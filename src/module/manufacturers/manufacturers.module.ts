import { Module } from '@nestjs/common';
import { ManufacturersService } from './services/manufacturers.service';
import { ManufacturersResolver } from './resolvers/manufacturers.resolver';

@Module({
  providers: [ManufacturersResolver, ManufacturersService],
})
export class ManufacturersModule {}
