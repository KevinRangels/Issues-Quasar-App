import { computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';
import type { Label } from '../interfaces/label';
import { useIssuesStore } from '../../stores/issues';

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi<Label[]>('/labels?per_page=100');
  return data;
};

const useLabels = () => {
  const issuesStore = useIssuesStore();

  const labelsQuery = useQuery(['labels'], getLabels, {
    staleTime: 1000 * 60 * 60, // One hour
  });

  return {
    labelsQuery,

    // Getters
    selectedLabels: computed(() => issuesStore.labels),
    // Methods
    toogleLabel: issuesStore.toggleLabel,
  };
};

export default useLabels;
