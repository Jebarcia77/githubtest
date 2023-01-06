import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { githubApiUrl } from 'src/config';

@Injectable()
export class CommitsService {
  async getCommits(repo: string, owner:string): Promise<any[]> {
    let a= 'melcv1';
    let b='coordinacionEstatica';
    const { data } = await axios.get(`${githubApiUrl}/repos/${owner}/${repo}/commits`);
    return data;
  }
}
