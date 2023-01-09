import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { GITHUB_API_URL } from '../data/api';

//Interfaces
import { Commit } from '../interfaces/commitsInterface';


export const useFetchCommits = () => {
  const [commits, setCommits] = useState<Commit[]>([]);

  async function fetchData() {
    const result = await axios(GITHUB_API_URL.getCommits);

    setCommits(result.data);
  }

  useEffect(() => {    
    fetchData();
  }, [])


  
  return {
    commits,
  }
}
