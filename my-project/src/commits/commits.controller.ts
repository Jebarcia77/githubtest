import { Controller, Get, Param } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get(':owner/:repo')
  async getCommits(
    @Param('repo') repo: string, 
    @Param('owner') owner: string,
    ) {

      try {
        return this.commitsService.getCommits(repo, owner);
      } catch (error) {
        if (error.response) {
          throw new HttpException(error.response.data, error.response.status);
        } else {
          throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
  }
}
