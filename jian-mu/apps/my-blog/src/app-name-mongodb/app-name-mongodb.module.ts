import { Module } from '@nestjs/common';
import { AppNameDomainModule } from '../app-name-domain/app-name-domain.module';

@Module({
    imports: [AppNameDomainModule],
    controllers: [],
    providers: []
})
export class AppNameMongoDbModule { }
