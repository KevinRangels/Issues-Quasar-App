<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import FilterSelector from '../components/filter-selector/FilterSelector.vue';
import IssueList from '../components/issue-list/IssueList.vue';
import useIssues from '../composables/useIssues';

const { issuesQuery } = useIssues()

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
</template>


<style scoped>

</style>