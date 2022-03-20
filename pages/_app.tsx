import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'
import Wrap from '@layout/Wrap'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          retry: false,
        },
      },
    })
  )
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Wrap>
          <Component {...pageProps} />
        </Wrap>
      </Hydrate>
    </QueryClientProvider>
  )
}
export default MyApp
