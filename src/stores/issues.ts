import { defineStore } from 'pinia';
import { State } from 'src/issues/interfaces/issue';
import { computed, ref } from 'vue';

export const useIssuesStore = defineStore('issues', () => {
  const state = ref<State>(State.All);
  const labels = ref<string[]>([]);

  return {
    // State
    state,
    labels,
    // Getters
    // squareCounter: computed(() => count.value * count.value),

    // Actions
    toggleLabel(labelName: string) {
      if (labels.value.includes(labelName)) {
        labels.value = labels.value.filter((label) => label !== labelName);
        return;
      }
      labels.value.push(labelName);
    },
  };
});
