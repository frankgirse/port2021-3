import '@react-pdf-viewer/core/lib/styles/index.css'
import React from 'react'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import '@/css/tailwind.css'
import '@/css/modal.css'
import '@/css/prism.css'
import '/css/table.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "@fancyapps/ui/dist/fancybox.css";
import 'react-fancybox/lib/fancybox.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Analytics from '../components/analytics'
import LayoutWrapper from '../components/LayoutWrapper'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />/
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
