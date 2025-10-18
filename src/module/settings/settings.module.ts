import { Module } from '@nestjs/common';
import { SettingsService } from './services/settings.service';
import { SettingsResolver } from './resolvers/settings.resolver';

@Module({
  providers: [SettingsResolver, SettingsService],
  exports: [SettingsService],
})
export class SettingsModule {}
