import Image from 'next/image'
import { Inter } from 'next/font/google'

import Head from 'next/head';
import Layout from '@/hocs/Layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      
      <div>
        <h1 className='text-blue-600'>Home</h1>
      </div>
    </main>
  )
  
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
}
