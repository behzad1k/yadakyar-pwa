import HomeHeader from '@/components/header/HomeHeader';
import Nav from '@/components/layout/Nav';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YadakYar',
  description: 'Home',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <main>
        <HomeHeader />
          {children}
        <Nav />
      </main>
  )
}
