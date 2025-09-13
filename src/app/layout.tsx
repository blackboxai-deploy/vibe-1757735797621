import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Uniq Developer - Lua | JavaScript | CSS | HTML | SQL',
  description: 'Master the core technologies: Lua scripting, JavaScript development, CSS styling, HTML markup, and SQL database management.',
  keywords: 'Lua, JavaScript, CSS, HTML, SQL, developer, programming, scripting, web development, database',
  authors: [{ name: 'Uniq Developer' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3B82F6'
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-inter bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}