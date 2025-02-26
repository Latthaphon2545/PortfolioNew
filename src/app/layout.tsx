import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/navbar/navbar'
import Footer from './footer/footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Latthaphon Portfolio',
  description: 'Latthaphon Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' data-theme='mytheme' className='scroll-smooth'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <div>
          <Navbar />
        </div>
        <div className='pt-10'>{children}</div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
