import { Module } from '@nestjs/common';
import { AllExceptionsFilterFilter } from './all-exceptions-filter.filter';

@Module({
  providers: [AllExceptionsFilterFilter],
  exports: [AllExceptionsFilterFilter],
})
export class LibraryModule { }
