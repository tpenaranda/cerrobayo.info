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
      <main className="flex-grow bg-black flex flex-wrap items-center content-center justify-center text-white" style={{ backgroundImage: 'url(/bg00.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className="flex flex-wrap justify-center py-24 opacity-80">
          <Snowflake size={128}>
            <animate
              attributeName="opacity"
              values="0.2;1;0.2"
              dur="10s"
              repeatCount="indefinite"
            ></animate>
          </Snowflake>
          <p className="w-full text-center text-xl">18 Junio | Apertura</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
