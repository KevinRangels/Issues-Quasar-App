<script setup lang="ts">
import { useRoute } from 'vue-router';
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import IssueCard from '../components/issue-list/IssueCard.vue';
import useIssue from '../composables/useIssue';

    const route = useRoute()
    const { id } = route.params

    const { issueQuery } = useIssue(+id)
</script>

<template>
    <router-link class="text-white" to="/">Go Back</router-link>

    <LoaderSpinner v-if="issueQuery.isLoading.value" color="white" :thickness="1" size="1.5rem" :show-text="false" />
    <IssueCard v-else-if="issueQuery.data.value" :issue="issueQuery.data.value" />
    <p v-else>Issue with ID: {{ id }} not found</p>

    <!-- Comments -->
    <LoaderSpinner :thickness="1" size="1.5rem" :show-text="false" />

    <div class="column">
        <span class="text-h3 q-mb-md">Comments (5)</span>
        <!-- <IssueCard v-for="comment of 5" :key="comment"/> -->
    </div>
</template>


<style scoped>

</style>