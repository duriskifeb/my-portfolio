import type { AppProps } from "next/app";
import "./globals.css" //path ke global css
import "@fontcource-variable/sora";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
