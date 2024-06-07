import Navbar from "@/components/Navbar";
import Head from 'next/head';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mahartha Gemilang</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <main className="text-white ">
        <ThemeProvider>
          <Navbar />
          <main>
            <Component {...pageProps} />
            <Analytics />
          </main>
        </ThemeProvider>
      </main>
    </>
  )
}
