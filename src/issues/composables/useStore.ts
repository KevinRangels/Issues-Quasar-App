import { storeToRefs } from 'pinia';
import { useIssuesStore } from '../../stores/issues';

const useStore = () => {
  const issuesStore = useIssuesStore();
  const { labels, state } = storeToRefs(issuesStore);

  return {
    // State
    labels,
    state,
    // Getters
    // squareCounter: computed(() => count.value * count.value),

    // Actions
  };
};

export default useStore;
