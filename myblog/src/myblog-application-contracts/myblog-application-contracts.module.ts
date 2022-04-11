import { Module } from '@nestjs/common';
import { MyBlogDomainSharedModule } from '../myblog-domain-shared/myblog-domain-shared.module';
import { UserDto } from './user/user-dto';

@Module({
    imports: [MyBlogDomainSharedModule],
    providers: [UserDto],
    exports: [UserDto]
})
export class MyBlogApplicationContractsModule { }
