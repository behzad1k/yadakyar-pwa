import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const useUrlParam = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setUrlParam = (key, value) => {

      const current = new URLSearchParams(Array.from(searchParams.entries()));

      if (!key ) {
        current.delete(key);
      } else {
        if (current.get(key)?.includes('[]')){
          current.append(key, value);
        }
        else{
          current.set(key, value);
        }
      }
      const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  }

  return {
    setUrlParam
  }
}
export default useUrlParam;
