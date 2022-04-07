import { Module } from '@nestjs/common';
import { MineBlogApplicationContractsModule } from '../mineblog-application-contracts/mineblog-application-contracts.module';

@Module({
    imports: [MineBlogApplicationContractsModule],
    controllers: [],
    providers: []
})
export class MineBlogHttpApiModule { }
