import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './commons/all-exceptions.filter';

@Module({
    imports: [],
    controllers: [],
    providers: [
        {
            provide: APP_FILTER,
            useClass: AllExceptionsFilter,
        }
    ]
})
export class MyBlogDomainSharedModule { }
