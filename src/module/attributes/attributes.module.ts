import { Module } from '@nestjs/common';
import { AttributesService } from './services/attributes.service';
import { AttributesResolver } from './resolvers/attributes.resolver';

@Module({
  providers: [AttributesResolver, AttributesService],
})
export class AttributesModule {}
