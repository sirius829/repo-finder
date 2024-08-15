import { useState } from 'react';
import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'https://api.github.com/' })
export const useGitHub = () => {
  const [users, setUsers] = useState([]);

  const searchUsers = async (query: string) => {
    if (!query.trim()) {
      setUsers([]);
      return;
    }
    const result = await axios.get(`https://api.github.com/search/users`, {
      params: {
        q: query,
        per_page: 5
      }
    });
    setUsers(result.data.items);
  };

  const fetchRepositories = async (username: string) => {
    const result = await axios(`https://api.github.com/users/${username}/repos`);
    return result.data;  // Return the data for direct consumption
  };

  return { users, searchUsers, fetchRepositories };
};
