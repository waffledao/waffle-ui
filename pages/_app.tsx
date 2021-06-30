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
        <link rel="manifest" href="/manifest.json" />
        <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="title" content="Waffle | NFT Raffles" />
        <title>Waffle | NFT Raffles</title>
        <style
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            /* eslint-disable max-len */
            __html: `
              @font-face {
                font-family: 'Inter';
                font-display: swap;
                font-weight: 400;
                src: url('/fonts/Inter-Regular.tff') format('woff');
              }

              @font-face {
                font-family: 'Inter';
                font-display: swap;
                font-weight: 500;
                src: url('/fonts/Inter-Medium.tff') format('woff');
              }

              @font-face {
                font-family: 'Inter';
                font-display: swap;
                font-weight: 600;
                src: url('/fonts/Inter-SemiBold.tff') format('woff');
              }
            }
            `,
            /* eslint-enable max-len */
          }}
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        {typeof window === 'undefined' && (
          <style
            id="holderStyle"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
         *, *::before, *::after {
           transition: none!important;
         }
         `,
            }}
          />
        )}
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </CacheProvider>
  )
}
