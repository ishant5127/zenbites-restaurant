import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ZenBites - Buddhist Japanese Vegetarian Kitchen',
  description: 'Mindful dining with authentic Japanese vegetarian flavors in New Delhi. Experience the art of Shojin Ryori cuisine.',
  keywords: 'Japanese restaurant, vegetarian, vegan, Buddhist cuisine, Shojin Ryori, New Delhi, mindful dining',
  authors: [{ name: 'ZenBites Restaurant' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Sawarabi+Mincho:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body className={`${notoSansJP.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}