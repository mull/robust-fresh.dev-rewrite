export default function Footer() {
  return (
    <footer class="bg-peach text-center pt-20 overflow-hidden relative">
      <div class="max-w-5xl lg:w-full mx-6 md:mx-16 lg:mx-auto mb-40 flex-grow flex flex-col text-left text-black">
        <h4 class="z-10 text-md font-bold">
          Robust är en tjänst där du som ansvarig för en webbplats kan testa den
          ur ett antal säkerhetsaspekter. Har sajten tillräckligt god säkerhet
          ur dessa aspekter så blir man tilldelad ett sigill som man kan bädda
          in på sin sajt för att visa att den är{" "}
          <span class="highlight">Robust.</span>
        </h4>
        <div class="grid grid-rows-2 md:grid-cols-3 md:grid-rows-1 mt-10 md:my-16 z-10">
          <div class="mb-10 md:mb-0">
            <p>
              <strong>Addressuppgifter</strong>
            </p>
            <p>Greta Garbos Väg 13</p>
            <p>169 40 Solna</p>
            <p>Sweden</p>
            <p>Registration number: 556534-0014</p>
            <p>Registered office: Stockholm</p>
          </div>

          <div class="mb-10 md:mb-0">
            <p>
              <strong>Kontaktuppgifter</strong>
            </p>
            <a class="text-underline font-bold" href="mailto:robust@netnod.se">
              robust@netnod.se
            </a>
            <br />
            <a
              class="text-underline font-bold"
              href="https://github.com/Netnod/robust-tjanst/issues/"
            >
              Felrapportering
            </a>
          </div>

          <img src="/img/robust-badge--animated.svg" class="hidden md:block" />

          <div class="flex flex-col md:flex-row my-10 z-10">
            <a
              class="mr-2 text-underline font-bold"
              href="https://github.com/Netnod/robust-tjanst"
            >
              Källkod
            </a>

            {/* TODO: Tillgänglighetsredogörelse & Cookies */}
            <img
              src="/img/robust-badge--animated.svg"
              class="block md:hidden mx-16 sm:mx-48"
            />
          </div>
        </div>
      </div>

      <img
        src="/img/footer-icon.svg"
        class="absolute -left-20 sm:-left-40 -bottom-40 sm:-bottom-72 opacity-50 mix-blend-overlay"
      />
    </footer>
  )
}
