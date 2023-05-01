<script lang="ts" setup>
import { useRouter } from 'vue-router';
// import { ImUsers } from 'react-icons/im';
// import { FaUserPlus } from 'react-icons/fa';

const router = useRouter();
const navigate = (url: string) => {
  router.push(url);
};

const addNewUser = () => {
  // onAddUserOpenTop();
};
</script>


<template>
    <div>
      <div class="font-semibold text-gray-500 text-center text-sm mb-2">
        Users
      </div>
      <div class="space-y-2">
        <button
          @click="navigate('/users')"
          class="w-full flex items-center justify-start px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
        >
          <ImUsers />
          <span class="ml-2">Browse SPMS Users</span>
        </button>
        <button
          @click="addNewUser"
          class="w-full flex items-center justify-start px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
        >
          <FaUserPlus />
          <span class="ml-2">Add New User</span>
        </button>
      </div>
    </div>
  </template>
  