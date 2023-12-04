import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const useUrlParam = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setUrlParam = (key, value) => {

    const current = new URLSearchParams(Array.from(searchParams.entries()));
      if (key?.includes('[]')){
        current.append(key, value);
      }
      else{
        current.set(key, value);
      }
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  }

  const setUrlParams = (entries: any[]) => {

    const current = new URLSearchParams(Array.from(searchParams.entries()));

    entries.map((e: any) => {
      if (e.key?.includes('[]')){
        current.append(e.key, e.value);
      }
      else{
        current.set(e.key, e.value);
      }
    })

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  }

  const removeUrlParam = (key, value = undefined) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (value){
      current.delete(key, value);
    } else {
      while(current.has(key)) {
        current.delete(key);
      }
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  const removeUrlParams = (entries: any[]) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    entries.map((e: any) => {
      if (e.value !== undefined){
        current.delete(e.key, e.value);
      } else {
        current.delete(e.key)
      }
    })


    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  return {
    removeUrlParams,
    removeUrlParam,
    setUrlParams,
    setUrlParam
  }
}
export default useUrlParam;
