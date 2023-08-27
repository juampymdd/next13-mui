import ThemeRegistry from '../../theme/ThemeRegistry'
import './globals.css'
import type { Metadata } from 'next'




export const metadata: Metadata = {
  title: 'MUI Next App',
  description: 'A Next.js app with MUI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>{children}</body>
      </ThemeRegistry>
    </html>
  )
}
