<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

import ProjectMenuContents from './menu/ProjectMenuContents.vue';
import ReportMenuContents from './menu/ReportMenuContents.vue';
import StaffMenuContents from './menu/StaffMenuContents.vue';


import ProjectSearchBar from './ProjectSearchBar.vue'; // Replace with your ProjectSearchBar component
import NavitarComponent from './NavitarComponent.vue'; // Replace with your NavitarComponent component

import { testUserData } from '@/lib/testData';

const router = useRouter();
const navigate = (url: string) => {
  router.push(url);
};

const shouldShowHamburger = ref(false);
const drawerIsOpen = ref(false);
const windowSizeValue = ref(window.innerWidth);
const drawerBtnRef = ref(null);

const handleResize = () => {
  const breakpoint = 1024; // Replace with your preferred breakpoint value
  shouldShowHamburger.value = window.innerWidth < breakpoint;
  windowSizeValue.value = window.innerWidth;
};

const toggleDrawer = () => {
  drawerIsOpen.value = !drawerIsOpen.value;
};

onMounted(() => {
  handleResize(); // initial check
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div class="bg-black bg-opacity-80 py-2 rounded-b-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <!-- SPMS Logo/Title -->
        <button class="px-5 text-white text-opacity-70 text-md focus:outline-none" @click="navigate('/')">
          <span class="text-lg font-bold">SPMS</span>
        </button>
        <!-- Hamburger Menu and Navigation -->
        <div v-if="shouldShowHamburger" class="flex-grow flex justify-end">
          <div class="mx-3">
            <button ref="drawerBtnRef" @click="toggleDrawer"
              class="bg-gray-600 text-white p-2 rounded hover:bg-white hover:text-black focus:outline-none">
              <!-- <GiHamburgerMenu class="text-2xl" /> -->
            </button>
            <!-- Drawer Content -->
            <div v-show="drawerIsOpen" class="fixed inset-0 z-50 flex flex-col w-full h-full bg-black bg-opacity-90">
              <div class="flex justify-end">
                <button @click="toggleDrawer" class="text-white p-2 focus:outline-none">
                  <IoClose class="text-2xl" />
                </button>
              </div>
              <div class="text-white text-center font-semibold text-sm mb-2">
                Menu
              </div>
              <ProjectMenuContents />
              <ReportMenuContents />
              <StaffMenuContents />
            </div>
          </div>
        </div>
        <!-- Full Navigation -->
        <div v-else class="flex-grow flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <ProjectMenuContents />
            <!-- <ReportMenuContents /> -->
            <!-- <StaffMenuContents /> -->
          </div>
          <!-- RHS Items -->
          <div class="flex items-center px-3">
            <!-- Project Search -->
            <!-- <ProjectSearchBar /> -->
            <!-- <NavitarComponent :shouldShowName="true" :userData="testUserData[5]" :windowSize="windowSizeValue" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>