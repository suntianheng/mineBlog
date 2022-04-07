import { Module } from '@nestjs/common';
import { MineBlogApplicationContractsModule } from '../mineblog-application-contracts/mineblog-application-contracts.module';
import { MineBlogDomainModule } from '../mineblog-domain/mineblog-domain.module';

@Module({
    imports: [MineBlogDomainModule,MineBlogApplicationContractsModule],
    controllers: [],
    providers: []
})
export class MineBlogApplicationModule { }
