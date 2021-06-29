import Head from 'next/head'
import { CacheProvider } from '@emotion/react'
import type { AppProps /* , AppContext */ } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from '@emotion/css'

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    window.onload = () => document.getElementById('holderStyle')?.remove()
  }
  const queryClient = new QueryClient()
  return (
    <CacheProvider value={cache}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </CacheProvider>
  )
}
