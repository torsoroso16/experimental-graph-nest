import { Module } from '@nestjs/common';
import { CategoriesService } from './services/categories.service';
import { CategoriesResolver } from './resolvers/categories.resolver';

@Module({
  providers: [CategoriesResolver, CategoriesService],
})
export class CategoriesModule {}
