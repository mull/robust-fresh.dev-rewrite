import { AppProps } from "$fresh/server.ts"
import { Head } from "$fresh/runtime.ts"

export default function App({ Component }: AppProps) {
  const url = "/"

  return (
    <>
      <Head>
        <meta
          name="title"
          content="Robust Tjänst - Har din webbplats vad som krävs för att anses robust?"
        />
        <meta
          name="description"
          content="Testa om ni tar säkerhet på allvar och uppfyller de mest grundläggande krav man kan ställa på en webbsida idag."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${url}`} />
        <meta
          property="og:title"
          content="Robust Tjänst - Har din webbplats vad som krävs för att anses robust?"
        />
        <meta
          property="og:description"
          content="Testa om ni tar säkerhet på allvar och uppfyller de mest grundläggande krav man kan ställa på en webbsida idag."
        />
        <meta property="og:image" content={`${url}img/metaImg.png`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${url}`} />
        <meta
          property="twitter:title"
          content="Robust Tjänst - Har din webbplats vad som krävs för att anses robust?"
        />
        <meta
          property="twitter:description"
          content="Testa om ni tar säkerhet på allvar och uppfyller de mest grundläggande krav man kan ställa på en webbsida idag."
        />
        <meta property="twitter:image" content={`${url}img/metaImg.png`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossorigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div class="bg-peach">
        <Component />
      </div>
    </>
  )
}
