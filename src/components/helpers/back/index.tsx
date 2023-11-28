"use client"
import { useRouter } from 'next/navigation';

const Back = ({ children }: any) => {
  const router = useRouter();

  return(
    <span onClick={() => router.back()}>
      {children}
    </span>
  )
}

export default Back;