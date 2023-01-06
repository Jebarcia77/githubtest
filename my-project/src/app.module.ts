import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitsController } from './commits/commits.controller';
import { CommitsService } from './commits/commits.service';
import { GithubController } from './github/github.controller';

@Module({
  imports: [],
  controllers: [AppController, CommitsController, GithubController],
  providers: [AppService, CommitsService],
})
export class AppModule {}
