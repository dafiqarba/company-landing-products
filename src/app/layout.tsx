import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import './main.css'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'MySimpleStorefront',
  description: 'The Future of Accessible Storefront Is Here!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
