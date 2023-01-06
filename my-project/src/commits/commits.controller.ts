import { Controller, Get, Param } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get(':owner/:repo')
  async getCommits(
    @Param('repo') repo: string, 
    @Param('owner') owner: string,
    ) {
    return this.commitsService.getCommits(repo, owner);
  }
}
