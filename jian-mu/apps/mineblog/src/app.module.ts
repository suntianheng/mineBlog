import { Module } from '@nestjs/common';
import { AllExceptionsFilterFilter, LibraryModule } from '@app/library'
import { MineBlogHttpApiModule } from './mineblog-http-api/mineblog-http-api.module';
import { APP_FILTER } from '@nestjs/core';
@Module({
  imports: [
    LibraryModule,
    MineBlogHttpApiModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilterFilter,
    }],
})
export class AppModule { }
