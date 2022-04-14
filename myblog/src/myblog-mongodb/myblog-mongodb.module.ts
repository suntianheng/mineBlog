import { Module } from '@nestjs/common';
import { MyBlogDomainModule } from 'src/myblog-domain/myblog-domain.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/myblog-domain/user/user';

const mongodbEntities = [User];


@Module({
    imports: [
        TypeOrmModule.forRoot({
            url: "mongodb+srv://myBlog:ZH2ycxjDvlMDh0W7@cluster0.g5lnj.mongodb.net/myBlog?retryWrites=true&w=majority",
            type: "mongodb",
            database: "myBlog",
            //host: "cluster0.g5lnj.mongodb.net",
            //port: 27017,
            //username: "myBlog",
            //password: "ZH2ycxjDvlMDh0W7",
            synchronize: false,
            entities: mongodbEntities,
            useNewUrlParser: true, 
            retryWrites:true,
            w:"majority",
            useUnifiedTopology: true 
        }),
        TypeOrmModule.forFeature(mongodbEntities),
        MyBlogDomainModule
    ],
    controllers: [],
    providers: []
})
export class MyBlogMongoDbModule { }
