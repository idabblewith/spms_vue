<script lang="ts" setup>
    import { useRouter } from 'vue-router';
    // import { CgViewList } from 'react-icons/cg';
    // import { AiFillPrinter } from 'react-icons/ai';
    // import { ImBook } from 'react-icons/im';

    const router = useRouter();
    const navigate = (url: string) => {
    router.push(url);
    };

    const openUrl = (url: string) => {
    window.open(url, '_blank');
    };

    const arar_publications = [
    {
        fileUrl: 'https://scienceprojects.dbca.wa.gov.au/media/ararreports/11/AnnualReport20212022_138.pdf',
        years: '2021-2022',
    },
    {
        fileUrl: 'https://scienceprojects.dbca.wa.gov.au/static/files/arar-2017-2018.pdf',
        years: '2017-2018',
    },
    {
        fileUrl: 'https://scienceprojects.dbca.wa.gov.au/static/files/arar-2016-2017.pdf',
        years: '2016-2017',
    },
    {
        fileUrl: 'https://scienceprojects.dbca.wa.gov.au/static/files/arar-2015-2016.pdf',
        years: '2015-2016',
    },
    ];

</script>

<template>
  <div>
    <div class="font-semibold text-gray-500 text-center text-sm mb-2">
      Annual Research Activity Report
    </div>
    <div class="space-y-2">
      <button
        @click="navigate('/reports/dashboard')"
        class="w-full flex items-center justify-start px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
      >
        <CgViewList />
        <span class="ml-2">Overview</span>
      </button>
      <button
        @click="navigate('/reports/current')"
        class="w-full flex items-center justify-start px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
      >
        <AiFillPrinter />
        <span class="ml-2">Print Preview</span>
      </button>
    </div>
    <hr class="my-1 border-gray-400 dark:border-whiteAlpha-700" />
    <div class="font-semibold text-gray-500 text-center text-sm mb-2">
      Published
    </div>
    <div class="space-y-2">
      <button
        v-for="publication in arar_publications"
        :key="publication.years"
        @click="openUrl(publication.fileUrl)"
        class="w-full flex items-center justify-start px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
      >
        <ImBook />
        <span class="ml-2">ARAR {{ publication.years }}</span>
      </button>
    </div>
  </div>
</template>