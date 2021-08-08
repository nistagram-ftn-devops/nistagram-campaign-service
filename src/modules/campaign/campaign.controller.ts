import { Controller, Get, Param } from '@nestjs/common';
import { Campaign } from './campaign.entity';
import { CampaignService } from './campaign.service';

@Controller('api/campaign')
export class CampaignController {

    constructor(private campaignService: CampaignService) {}

    @Get('author/:id')
    findAll(@Param('id') id: number): Promise<Campaign[]> {
        return this.campaignService.findAuthorsCampaigns(id)
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<Campaign> {
        return this.campaignService.findById(id)
    }
}
