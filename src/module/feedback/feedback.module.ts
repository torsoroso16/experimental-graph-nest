import { Module } from '@nestjs/common';
import { FeedbackService } from './services/feedback.service';
import { FeedbackResolver } from './resolvers/feedback.resolver';

@Module({
  providers: [FeedbackResolver, FeedbackService],
  exports: [FeedbackModule],
})
export class FeedbackModule {}
