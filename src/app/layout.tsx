"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
//style dari globals css diletakan di root page
import '@/styles/globals.css'
import Header from './header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  
  const navigateTo=(url : string)=>{
    router.push(url)
  }
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header></Header>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/dashboard'}>Dashboard</Link></li>
                <li onClick={()=>navigateTo('/settings')}>Settings</li>
                <li><Link href={'/firstlastname'}>First Last Name</Link></li>
                <li><Link href={'/cari'}>Cari Pengguna Github</Link></li>
                <li><Link href={'/parallel'}>Fetching Parallel</Link></li>
                <li><Link href={'/sequential'}>Fetching Sequential</Link></li>
            </ul>
        {children}
      </body>
    </html>
  )
}
