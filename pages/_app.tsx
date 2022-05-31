import { useEffect } from 'react';
import { useRouter } from 'next/router'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [router.asPath]);

  return <Component {...pageProps} />
}

export default App
