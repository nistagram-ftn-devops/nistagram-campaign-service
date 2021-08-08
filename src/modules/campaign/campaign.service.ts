import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campaign } from './campaign.entity';
import { CampaignRepository } from './campaign.repository';

@Injectable()
export class CampaignService {

    constructor(@InjectRepository(CampaignRepository) private campaignRepository: CampaignRepository) {}

    async findAuthorsCampaigns(id: number): Promise<Campaign[]> {
        return this.campaignRepository.find({ authorId: id })
    }

    async findById(id: number): Promise<Campaign> {
        const campaign = await this.campaignRepository.findOne(id)
        if (!campaign) throw new NotFoundException('campaign-not-found')
        return campaign
    }

    async create(payload: Partial<Campaign>): Promise<Campaign> {
        const campaign = new Campaign()
        campaign.authorId = payload.authorId
        campaign.imageId = payload.imageId
        campaign.exposureDate = payload.exposureDate
        campaign.website = payload.website
        return this.campaignRepository.save(campaign)
    }
}
