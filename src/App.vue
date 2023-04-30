<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FooterSection from './components/FooterSection.vue';
import HeaderSection from './components/HeaderSection.vue';
import PageWrapperVue from './components/PageWrapper.vue';
import myImage from "./assets/80mile.jpg";
import {useDocumentTitle} from '@/use/useDocumentTitle';

// Dynamic Title - Dependent on Route
useDocumentTitle();
</script>

<template>

  <!-- Centering component for nav and content -->
  <PageWrapperVue>
    <img :src="myImage" class="w-full h-full object-cover absolute top-0 left-0 z-0" />
    
    <div class="relative"> <!-- Add relative positioning to the wrapper div -->
      <!-- Navbar -->
      <HeaderSection />

      <!-- Page-specific Content -->
      <div class="mt-6 min-h-128 bg-white rounded-lg py-10 overflow-y-auto">
        <div class="mx-10">
          <RouterView />
        </div>
      </div>
    </div>
  </PageWrapperVue>

  <!-- Footer positioned absolutely @ bottom -->
  <FooterSection/>
</template>

<style scoped></style>
