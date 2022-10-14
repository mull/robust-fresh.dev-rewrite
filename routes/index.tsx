import { Head } from "$fresh/runtime.ts"
import Footer from "../components/layout/Footer.tsx"
import Header from "../components/layout/Header.tsx"
import NewTestForm from "../components/NewTestForm.tsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>

      <div class="flex flex-col">
        <div class="pb-12 sm:pb-24 bg-rock-wall bg-cover bg-no-repeat bg-black">
          <Header />

          <div class="flex flex-col w-full pt-8 sm:pt-28">
            <div class="mx-4 md:mx-0 flex flex-col mb-8 items-center">
              <h1 class="text-xl md:text-6xl max-w-5xl mx-4 md:mx-8 lg:mx-4 font-bold text-peach mb-16 lg:mb-12">
                Förtjänar du Robust-sigillet? <br /> Testa om din sajt är
                tillräckligt robust och säker.
              </h1>
              <div class="py-4">
                <NewTestForm title="Skriv in en URL för att starta ett nytt test" />
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-5xl lg:w-full mx-6 md:mx-16 lg:mx-auto mt-2 sm:mt-28 flex-grow flex flex-col text-black">
          <div class="px-4 py-12 sm:px-12 pb-0 flex flex-row items-end">
            <h2 class="text-2xl font-bold">Så fungerar det</h2>
          </div>

          <section class="text-black p-4 sm:p-12 flex flex-row items-center">
            <div class="pt-2 flex flex-row flex-grow">
              <div>
                <h3 class="text-xl mb-4 font-bold">Du testar!</h3>
                <p>
                  Se om din sajt är robust genom reguljära tester av bland annat
                </p>
                <ul class="list-disc pl-5">
                  <li>
                    <p>IPv6</p>
                  </li>
                  <li>
                    <p>DNSSEC</p>
                  </li>
                  <li>
                    <p>HTTPS</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section class="p-4 mt-2 sm:p-12 flex flex-row items-center">
            <div>
              <h3 class="text-xl mb-4 font-bold">Vi följer med</h3>
              <p>
                Teknologier kommer och går varje år, det är inte lätt att hålla
                koll. Vi har byggt denna tjänst så att:
              </p>
              <ul class="list-disc pl-5">
                <li>
                  <p>Du kan fokusera på din affär</p>
                </li>
                <li>
                  <p>
                    Vi kan hålla dig uppdaterad när ny teknologi bör införlivas
                  </p>
                </li>
                <li>
                  <p>Vi samlar material som förklarar hur man gör</p>
                </li>
              </ul>
            </div>
          </section>

          <section class="p-4 sm:p-12 flex flex-row items-center">
            <div class="pt-2">
              <h3 class="text-xl mb-4 font-bold">Vi lär ut</h3>
              <p>
                Vår mission är att hjälpa dig att se till att du har en Robust
                och säker sajt.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
