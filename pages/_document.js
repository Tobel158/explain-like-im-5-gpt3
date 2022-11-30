import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Explain Like I'm 5 🐣" key="title"/>
        <meta property="og:description" content="Make Any Topic Fun and Easy to Learn!" key="description"/>
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Tobel158/explain-like-im-5-gpt3/main/assets/birdie.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
