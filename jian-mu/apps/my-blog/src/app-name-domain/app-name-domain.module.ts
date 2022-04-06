import { Module } from '@nestjs/common';
import { AppNameDomainSharedModule } from '../app-name-domain-shared/app-name-domain-shared.module';

@Module({
    imports: [AppNameDomainSharedModule],
    controllers: [],
    providers: []
})
export class AppNameDomainModule { }
