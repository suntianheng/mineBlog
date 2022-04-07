import { Module } from '@nestjs/common';
import { MineBlogDomainSharedModule } from '../mineblog-domain-shared/mineblog-domain-shared.module';

@Module({
    imports: [MineBlogDomainSharedModule],
    controllers: [],
    providers: []
})
export class MineBlogApplicationContractsModule { }
