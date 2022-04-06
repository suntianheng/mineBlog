import { Module } from '@nestjs/common';
import { MyLibraryModule } from '@app/my-library'
import { AppNameHttpApiModule } from './app-name-http-api/app-name-http-api.module';
@Module({
  imports: [
    MyLibraryModule,
    AppNameHttpApiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
