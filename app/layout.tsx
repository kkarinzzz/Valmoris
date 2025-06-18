import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Valmoris Dominion',
  description: 'Valmoris Official Website',
  generator: 'Valmoris',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
