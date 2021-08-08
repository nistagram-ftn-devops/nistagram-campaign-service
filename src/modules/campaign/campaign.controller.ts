import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

    @Post()
    create(@Body() args: Partial<Campaign>): Promise<Campaign> {
        return this.campaignService.create(args)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        const campaign = await this.campaignService.findById(id)
        this.campaignService.delete(campaign)
    }
}
