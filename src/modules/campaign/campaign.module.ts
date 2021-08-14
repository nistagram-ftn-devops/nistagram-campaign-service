import { Module } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CampaignController } from './campaign.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignRepository } from './campaign.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CampaignRepository])],
  providers: [CampaignService],
  controllers: [CampaignController]
})
export class CampaignModule {}
