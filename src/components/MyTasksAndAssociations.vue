<script setup lang="ts">
import { ref } from "vue";

import { testMyTasksData, testMyProjectsData, testMyPartnershipsData } from "@/lib/testData";

const showTasks = ref(false);
const showProjects = ref(false);
const showPartnerships = ref(false);


</script>

<template>
  <div class="mt-6">
    <ul class="divide-y divide-gray-200">
      <li>
        <button
          class="w-full py-4 px-4 flex items-center justify-between text-left"
          @click="showTasks = !showTasks"
        >
          <span>My Tasks</span>
          <div class="flex items-center">
            <span v-if="testMyTasksData.length >= 1" class="text-red-500 material-icons">
              error
            </span>
            <span v-else class="text-green-500 material-icons">
              check_circle
            </span>
            <span class="ml-2 material-icons">
              {{ showTasks ? 'expand_less' : 'expand_more' }}
            </span>
          </div>
        </button>
        <div v-if="showTasks" class="py-4 px-4">
          <p v-for="(task, index) in testMyTasksData" :key="index">{{ task.name }}</p>
        </div>
      </li>

      <li>
        <button
          class="w-full py-4 px-4 flex items-center justify-between text-left"
          @click="showProjects = !showProjects"
        >
          <span>My Projects</span>
          <div class="flex items-center">
            <span v-if="testMyProjectsData.length >= 1" class="text-red-500 material-icons">
              error
            </span>
            <span v-else class="text-green-500 material-icons">
              check_circle
            </span>
            <span class="ml-2 material-icons">
              {{ showProjects ? 'expand_less' : 'expand_more' }}
            </span>
          </div>
        </button>
        <div v-if="showProjects" class="py-4 px-4">
          <p v-for="(project, index) in testMyProjectsData" :key="index">{{ project.name }}</p>
        </div>
      </li>
    
    
      <li>
        <button
          class="w-full py-4 px-4 flex items-center justify-between text-left"
          @click="showPartnerships = !showPartnerships"
        >
          <span>My Partnerships</span>
          <div class="flex items-center">
            <span v-if="testMyPartnershipsData.length >= 1" class="text-red-500 material-icons">
              error
            </span>
            <span v-else class="text-green-500 material-icons">
              check_circle
            </span>
            <span class="ml-2 material-icons">
              {{ showPartnerships ? 'expand_less' : 'expand_more' }}
            </span>
          </div>
        </button>
        <div v-if="showPartnerships" class="py-4 px-4">
          <p v-for="(partnership, index) in testMyPartnershipsData" :key="index">{{ partnership.name }}</p>
        </div>
      </li>
    
    
    </ul>
  </div>
  </template>