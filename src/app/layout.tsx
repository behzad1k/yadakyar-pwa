import Popup from '@/components/popup';
import Providers from '@/services/Providers';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import '@/app/fonts.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'yadakYar',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        {children}
        <Popup />
      </Providers>
      </body>
    </html>
  )
}
