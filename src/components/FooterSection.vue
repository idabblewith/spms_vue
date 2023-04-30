<script setup lang="ts">
    const currentYear = new Date().getFullYear();
</script>

<template>
      <div
    class="absolute bottom-0 w-full text-gray-300 bg-gray-800 py-4"
  >
    <div class="text-center flex items-center justify-center space-x-2 text-sm">
      <a
        class="text-gray-400"
        href="https://github.com/dbca-wa/sdis"
      >
        SPMS v5.0.0
      </a>
      <span>© 2012-{{ currentYear }} DBCA. All rights reserved.</span>
    </div>
  </div>

</template>