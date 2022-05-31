import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    console.log(router.asPath)
  }, [router.asPath])

  return <Component {...pageProps} />
}

export default App
