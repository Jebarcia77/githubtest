import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { map } from 'rxjs/operators';
import { githubApiUrl } from 'src/config';

@Injectable()
export class CommitsService {
  async getCommits(repo: string, owner: string): Promise<any[]> {

    const url = `${githubApiUrl}/repos/${owner}/${repo}/commits`;
    const response = await axios.get(url);

    return response.data.map(commit => ({
      id:commit.sha,
      sha: commit.sha,
      author: commit.commit.author.name,
      message: commit.commit.message,
      date: commit.commit.author.date
    }));
  }
}
