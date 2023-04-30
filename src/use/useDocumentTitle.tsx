import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const baseTitle = 'SPMS';

export const useDocumentTitle = () => {
  const route = useRoute();

  watch(
    () => route.path,
    () => {
      const path = route.path.split('/');
      const pageTitle = path[1] ? `${baseTitle} | ${path[1].charAt(0).toUpperCase() + path[1].slice(1)}` : baseTitle;
      document.title = pageTitle;
    },
    { immediate: true }
  );

  return null;
};