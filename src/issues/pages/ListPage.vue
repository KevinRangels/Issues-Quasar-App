<script setup lang="ts">
import { ref } from 'vue';
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import FilterSelector from '../components/filter-selector/FilterSelector.vue';
import FloatingButtons from '../components/FloatingButtons.vue';
import IssueList from '../components/issue-list/IssueList.vue';
import NewIssueDialog from '../components/NewIssueDialog.vue';
import useIssues from '../composables/useIssues';
import useLabels from '../composables/useLabels';

const { issuesQuery } = useIssues()

const isOpen = ref<boolean>(false);
const { labelsQuery } = useLabels()

const openDialog = () => {
  isOpen.value = true;
}


</script>

<template>
    <div class="row q-mb-md">
        <div class="col-12">
            <span class="text-h4">GitHub Issues</span>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-md-4">
            <!-- TODO: Filtros -->
            <FilterSelector/>
        </div>
        <div class="col-xs-12 col-md-8">
            <!-- TODO: Loader -->
            <LoaderSpinner v-if="issuesQuery.isLoading.value" color="white"/>
            <IssueList :issues="issuesQuery.data?.value || []" v-else/>
        </div>
    </div>

    <!-- FloatingButtons -->
    <FloatingButtons :buttons="[
        {
            icon: 'add',
            color: 'primary',
            size: 'lg',
            action: openDialog
        },
    ]"/>

    <NewIssueDialog
      :is-open="isOpen"
      v-if="labelsQuery.data"
      :labels="labelsQuery.data.value?.map( label => label.name ) || []"
      @on-close="isOpen = false"
    />
</template>


<style scoped>

</style>