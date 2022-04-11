import { Module } from '@nestjs/common';
import { UserDto } from 'src/myblog-application-contracts/user/user-dto';
import { MyBlogApplicationContractsModule } from '../myblog-application-contracts/myblog-application-contracts.module';
import { MyBlogDomainModule } from '../myblog-domain/myblog-domain.module';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './auth/local.strategy';
import { UserService } from './user/user.service';

@Module({
    imports: [
        MyBlogApplicationContractsModule,
        MyBlogDomainModule
        ],
    providers: [
        UserService,
    ],
    exports: []
})
export class MyBlogApplicationModule { }
