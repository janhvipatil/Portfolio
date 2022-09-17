import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider>
      <Navbar />
      <Sidebar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp