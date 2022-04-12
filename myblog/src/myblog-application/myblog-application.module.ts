import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { MyBlogApplicationContractsModule } from '../myblog-application-contracts/myblog-application-contracts.module';
import { MyBlogDomainModule } from '../myblog-domain/myblog-domain.module';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './passport/local.strategy';
import { UsersService } from './users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './passport/jwt.strategy';
@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: 'secretKey',
            signOptions: { expiresIn: '60s' },
        }),


        MyBlogDomainModule,
        MyBlogApplicationContractsModule,
    ],
    providers: [
        UsersService, AuthService, LocalStrategy, JwtStrategy
    ],
    exports: [AuthService]
})
export class MyBlogApplicationModule { }
