import type { Metadata } from 'next'
import { Inter, Cookie } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from './header'
import { cn } from '@/lib/utils'
import { BuyMeCoffee } from '@/components/buy-me-coffee'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cookie = Cookie({
  subsets: ['latin'],
  variable: '--font-cookie',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'QR Code Generator',
  description: 'A QR Code generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, cookie.variable, 'font-sans')}>
        <Providers>
          <Header />
          {children}
          <div className="md:hidden fixed bottom-6 right-6">
            <BuyMeCoffee />
          </div>
        </Providers>
      </body>
    </html>
  )
}
