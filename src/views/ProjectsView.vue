<script setup lang="ts">
import NavigationBar from '@/components/Base/Page/NavigationBar.vue';
import { OhVueIcon } from 'oh-vue-icons';

const components = {
    'v-icon': OhVueIcon,
};

// const arrowRightIcon = arrowRight;

</script>

<template>
    <NavigationBar :navigationBarProps="{
        subDirOne: {
            title: 'Projects',
            link: '/projects',
        },
        subDirTwo: {
            title: 'Browse',
            link: '/projects/browse',
        },
    }" />
    <div>
        <h1>Getting Started with Vue.js and Font Awesome</h1>
        <p>Have a phone call:
        </p>
        <!-- <v-icon :icon="arrowRightIcon" /> -->

    </div>
</template>

