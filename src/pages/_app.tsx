import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/contexts/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="text-black dark:text-white">
      <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  )
}
