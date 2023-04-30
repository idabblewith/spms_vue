<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue';
import { useRouter } from 'vue-router';

import MyTasksAndAssociations from "@/components/MyTasksAndAssociations.vue";
import {testDefaultUserData} from "@/lib/testData"

const router = useRouter();

const shouldConcat = ref(false);

const spmsText = ref("Science Project Management System");
const welcomeUser = ref("");
const annualReportText = ref("Annual Report");
const firstName = testDefaultUserData.firstName;

const handleResize = () => {
    if (window.innerWidth < 1150) {
    welcomeUser.value = "";
    shouldConcat.value = true;
    spmsText.value = "SPMS";
    annualReportText.value = "Report";
    } else {
    welcomeUser.value = `Hello, ${firstName}! Welcome to SPMS, DBCA's portal for project documentation, approval and reporting.`;
    shouldConcat.value = false;
    annualReportText.value = "Annual Report";
    if (window.innerWidth < 1350) {
        spmsText.value = "Science Project <br/> Management System";
    } else {
        spmsText.value = "Science Project Management System";
    }
    }
};


onMounted(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
});

</script>

<template>
    <div>
      <div
        class="bg-gray-100 rounded-lg p-10 flex flex-col relative"
      >
        <div class="absolute right-6">
          <!-- Annual Report Menu -->
          <!-- Replace NavMenu component with a custom Vue component -->
        </div>
        <h1 v-html="spmsText" class="text-4xl font-semibold"></h1>
        <br />
        <p class="text-lg font-medium">
          {{ welcomeUser }}
        </p>
        <br />
        <p>
          Please update and submit (when ready) all documents awaiting your attention in "My Tasks", update project details and team lists of "My Projects" and "My Partnerships", create new projects and initiate closure of old projects as appropriate. If you get stuck, the User Manual has all the answers!
        </p>
      </div>
  
      <!-- Replace MyTasksAndAssociations component with a custom Vue component -->
      <MyTasksAndAssociations/>
  
      <div
        class="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
      >
        <button class="bg-blue-600 text-white px-4 py-2 rounded">
          {{ shouldConcat ? "Data" : "Data Catalogue" }}
        </button>
        <button class="bg-green-600 text-white px-4 py-2 rounded">
          {{ shouldConcat ? "Scientific Sites" : "Scientific Site Register" }}
        </button>
        <button class="bg-red-600 text-white px-4 py-2 rounded">
          {{ shouldConcat ? "Projects Pending" : "Projects Pending Approval" }}
        </button>
      </div>
  
      <div class="mt-6 text-center">
        <!-- Empty Center element -->
      </div>
    </div>
  </template>