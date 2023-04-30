import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';


export const useNavigate = (url:string) => {
    const router = useRouter();
    router.push(url);
  return null;
};