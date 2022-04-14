import { Module } from '@nestjs/common';
import { MyBlogApplicationModule } from 'src/myblog-application/myblog-application.module';
import { AuthController } from './auth/auth.controller';

@Module({
    imports: [MyBlogApplicationModule],
    controllers: [AuthController],
    providers: []
})
export class MyBlogHttpApiModule { }
