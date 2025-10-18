import { Module } from '@nestjs/common';
import { ReviewsService } from './services/reviews.service';
import { ReviewsResolver } from './resolvers/reviews.resolver';
import { ReportsResolver } from './resolvers/reports.resolver';

@Module({
  providers: [ReviewsResolver, ReviewsService, ReportsResolver],
})
export class ReviewsModule {}
