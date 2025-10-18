import { Module } from '@nestjs/common';
import { TypesService } from './services/types.service';
import { TypesResolver } from './resolvers/types.resolver';

@Module({
  providers: [TypesResolver, TypesService],
})
export class TypesModule {}
