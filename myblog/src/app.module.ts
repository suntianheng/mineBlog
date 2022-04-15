import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MyBlogApplicationModule } from './myblog-application/myblog-application.module';
import { MyBlogHttpApiModule } from './myblog-http-api/myblog-http-api.module';
import { MyBlogMongoDbModule } from './myblog-mongodb/myblog-mongodb.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MyBlogMongoDbModule,
    MyBlogHttpApiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
