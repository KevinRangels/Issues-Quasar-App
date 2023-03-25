<script setup lang="ts">

    interface Props {
        color?: string;
        size?: string;
        thickness?: number;
        showText?: boolean
    }

    const props = withDefaults(defineProps<Props>(), {
        color: 'primary',
        size: '3.5rem',
        thickness: 5,
        showText: true
    });

</script>

<template>
    <div class="column items-center">
        <q-spinner :color="props.color" :size="props.size" :thickness="props.thickness" />
        <span v-if="props.showText" class="q-mt-sm">Loading</span>
    </div>
</template>


<style scoped>

</style>