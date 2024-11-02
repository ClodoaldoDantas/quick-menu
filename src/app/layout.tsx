import type { Metadata } from 'next'
import { Roboto_Slab, Poppins } from 'next/font/google'
import './globals.css'

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-roboto-slab',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'QuickMenu',
  description: 'Crie cardápios digitais de forma rápida e fácil',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-br"
      className={`${robotoSlab.variable} ${poppins.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  )
}
