import { Module } from '@nestjs/common';
import { MyBlogDomainSharedModule } from '../myblog-domain-shared/myblog-domain-shared.module';

@Module({
    imports: [MyBlogDomainSharedModule],
})
export class MyBlogDomainModule { }
