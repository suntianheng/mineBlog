import { Module } from '@nestjs/common';
import { MineBlogModule } from './mine-blog/mine-blog.module';

@Module({
  imports: [MineBlogModule]
})
export class ModulesModule {}
