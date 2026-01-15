import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Noto_Sans_Display } from "next/font/google";

const notoSans = Noto_Sans_Display({
 subsets: ["cyrillic", "latin"], // Выберите нужные подмножества
 weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
 display: "swap",
});

export default function App({ Component, pageProps }: AppProps){
	return <>
  <Head>
   <title>MyTop - наш лучший топ </title>
   <link rel="icon" href="/favicon.ico" />

  </Head>
  <div className={notoSans.className}>
   <Component {...pageProps} />
  </div>
 </>;
}

