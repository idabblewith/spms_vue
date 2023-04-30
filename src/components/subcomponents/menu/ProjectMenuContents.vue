<script lang="ts" setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const navigate = (url:string) => {
        router.push(url);
    }

</script>

<template>
  <div>
    <div class="font-semibold text-gray-500 text-center text-sm mb-2">
      Create or Browse
    </div>
    <div class="space-y-2">
      <button
        @click="navigate('/projects/browse')"
        class="w-full flex items-center justify-start px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
      >
        <CgBrowse />
        <span class="ml-2">Browse Projects</span>
      </button>
      <button
        @click="navigate('/projects/new')"
        class="w-full flex items-center justify-start px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
      >
        <CgPlayListAdd />
        <span class="ml-2">Create New Project</span>
      </button>
    </div>
  </div>

</template>