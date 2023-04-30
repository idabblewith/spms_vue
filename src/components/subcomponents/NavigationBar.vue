<script setup lang="ts">
import type { INavigationBarProps } from 'types';

import { useNavigate } from '@/use/useNagivate';

const props = defineProps({
    navigationBarProps: {
        type: Object as () => INavigationBarProps,
        required: true
    }
})
</script>

<template>
  <div class="bg-gray-100 rounded px-4 py-2 relative">
    <div class="flex">
      <button @click="useNavigate('/')" class="text-blue-500 focus:outline-none font-semibold">
        Home
      </button>
      &nbsp;/&nbsp;
      <button @click="useNavigate(navigationBarProps.subDirOne.link)" class="text-blue-500 focus:outline-none font-semibold">
        {{ navigationBarProps?.subDirOne?.title }}
      </button>
      <template v-if="navigationBarProps?.subDirTwo">
        &nbsp;/&nbsp;
        <button @click="useNavigate(navigationBarProps?.subDirTwo?.link)" class="text-blue-500 focus:outline-none font-semibold">
          {{ navigationBarProps?.subDirTwo?.title }}
        </button>
        <template v-if="navigationBarProps?.subDirThree">
          &nbsp;/&nbsp;
          <button @click="useNavigate(navigationBarProps?.subDirThree.link)" class="text-blue-500 focus:outline-none">
            {{ navigationBarProps?.subDirThree.title }}
          </button>
        </template>
      </template>
    </div>
  </div>
</template>