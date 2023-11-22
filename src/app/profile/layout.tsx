import Nav from '@/components/layout/Nav';
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'profile',
  description: 'Generated by create next app',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <main>
        {children}
        <Nav />
      </main>
  )
}
