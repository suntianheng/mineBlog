import { Module } from '@nestjs/common';
import { MineBlogDomainModule } from '../mineblog-domain/mineblog-domain.module';
import { TypeOrmModule } from '@nestjs/typeorm';


const mongodbEntities = [];

@Module({
    imports: [MineBlogDomainModule,
        //MongooseModule.forRoot("mongodb+srv://myBlog:IUvQu3ihOmnGIH4J@cluster0.g5lnj.mongodb.net/myBlog?retryWrites=true&w=majority"),
        TypeOrmModule.forRoot({
            //url: "mongodb+srv://myBlog:IUvQu3ihOmnGIH4J@cluster0.g5lnj.mongodb.net/myBlog?retryWrites=true&w=majority",
            type: "mongodb",
            name: "mongodb",
            database: "myBlog",
            host: "cluster0.g5lnj.mongodb.net",
            port: 27017,
            username: "myBlog",
            password: "IUvQu3ihOmnGIH4J",
            synchronize: false,
            entities: mongodbEntities,
            logging: [
                "error"
            ]
        }),
        TypeOrmModule.forFeature(mongodbEntities, "mongodb")
    ],
    controllers: [],
    providers: []
})
export class MineBlogMongoDbModule { }
