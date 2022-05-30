import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-black">
      <Head>
        <title>Info Bayo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center text-white">
        <Image src="/logo-cb.png" alt="Vercel Logo" width={410} height={164} />
        <h4 className="text-lg">En breve...</h4>
      </main>
    </div>
  )
}

export default Home
