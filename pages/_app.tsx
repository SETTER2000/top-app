import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
// Импортируем конкретный шрифт из next/font/google
import { Noto_Sans_Display } from "next/font/google";

// Конфигурация шрифта
const notoSans = Noto_Sans_Display({
 subsets: ["cyrillic", "latin"], // Выберите нужные подмножества
 display: "swap",
 // Стратегия отображения:
 // "swap" — сразу показывает текст системным шрифтом, потом заменяет на загруженный
 // "block" — скрывает текст пока не загрузится шрифт
 // "fallback", "optional" — другие стратегии
 // variable: "--font-noto", // CSS переменная - здесь не нужна
 // Какие языковые подмножества загружать:
 // - "latin" — базовый латинский набор
 // - "cyrillic" — кириллица (русский и др.)
 // - "greek", "arabic", "vietnamese" и т.д.

 weight: ["300", "400", "500", "600", "700"], // Только нужные начертания
 // Какие начертания (font-weight) загружать:
 // 100 — Thin (тонкий)
 // 200 — Extra Light
 // 300 — Light
 // 400 — Regular/Normal (обычный)
 // 500 — Medium
 // 600 — Semi Bold
 // 700 — Bold (жирный)
 // 800 — Extra Bold
 // 900 — Black (очень жирный)


});

export default function App({ Component, pageProps }: AppProps){
	return <>
  <Head>
   <title>MyTop - наш лучший топ </title>
   <link rel="icon" href="/favicon.ico" />

  </Head>
  <div className={notoSans.className}> {/* Используем .variable */}
   <Component {...pageProps} />
  </div>
 </>;
}

