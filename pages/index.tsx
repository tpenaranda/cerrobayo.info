import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from './Header'
import Footer from './Footer'
import { Snowflake } from "phosphor-react"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Info Bayo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow bg-black flex flex-wrap items-center content-center justify-center text-white" style={{ backgroundImage: 'url(/bg00.jpg)', backgrounPosition: 'center', backgroundSize: 'cover' }}>
        <div className="py-24">
          <div className="animate-[spin_100s_linear_infinite]">
            <Snowflake size={256} />
          </div>
          <p className="w-full text-center text-xl">18 Junio | Apertura</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
