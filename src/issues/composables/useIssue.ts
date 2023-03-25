import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';
import { computed } from 'vue';
import type { Issue } from '../interfaces/issue';

const getIssue = async (issueNumber: number): Promise<Issue> => {
  const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);
  return data;
};

const getIssueComments = async (issueNumber: number): Promise<Issue[]> => {
  const { data } = await githubApi.get<Issue[]>(
    `/issues/${issueNumber}/comments`
  );
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

  const issueCommentsQuery = useQuery(
    ['issue', issueNumber, 'comments'],
    () => getIssueComments(issueNumber),
    {
      staleTime: 1000 * 15, //15 seg
      //   enabled: computed(() => !!issueQuery.data.value)
    }
  );

  return {
    issueQuery,
    issueCommentsQuery,
  };
};

export default useIssue;
