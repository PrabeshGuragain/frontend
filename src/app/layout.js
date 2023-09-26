import './globals.css'
import { Inter } from 'next/font/google'
import dotenv from 'dotenv'
import ReactReducerProvider from './ReactReducer'
import QueryProvider from './QueryProvider'
import AuthProvider from './lib/components/AuthProvider'


dotenv.config()
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: process.env.NEXT_PUBLIC_APP_NAME,
    manifest:"/manifest.webmanifest",
    icon:"logo.svg"
}
  

export default function RootLayout({ children }) {
  return (
  
    <html lang="en">
      <body className={inter.className}>

      <AuthProvider>
    <QueryProvider>
      <ReactReducerProvider>
            {children}
            </ReactReducerProvider>
        </QueryProvider>
    </AuthProvider>
      </body>
    </html>
    
  )
}
