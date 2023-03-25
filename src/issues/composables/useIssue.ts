import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';
import type { Issue } from '../interfaces/issue';

const getIssue = async (issueNumber: number): Promise<Issue> => {
  const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);
  return data;
};

const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery(
    ['issue', issueNumber],
    () => getIssue(issueNumber),
    {
      staleTime: 1000 * 60, //1 min
    }
  );

  return {
    issueQuery,
  };
};

export default useIssue;
