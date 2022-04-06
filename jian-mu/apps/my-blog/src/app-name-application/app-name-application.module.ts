import { Module } from '@nestjs/common';
import { AppNameApplicationContractsModule } from '../app-name-application-contracts/app-name-application-contracts.module';
import { AppNameDomainModule } from '../app-name-domain/app-name-domain.module';

@Module({
    imports: [AppNameDomainModule,AppNameApplicationContractsModule],
    controllers: [],
    providers: []
})
export class AppNameApplicationModule { }
