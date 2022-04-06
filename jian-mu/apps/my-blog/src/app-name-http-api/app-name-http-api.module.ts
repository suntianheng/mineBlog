import { Module } from '@nestjs/common';
import { AppNameApplicationContractsModule } from '../app-name-application-contracts/app-name-application-contracts.module';

@Module({
    imports: [AppNameApplicationContractsModule],
    controllers: [],
    providers: []
})
export class AppNameHttpApiModule { }
