// block append script
//   script(type="application/javascript").
//     function handleOnClick() {
//       const menu = document.getElementById("mobile-menu")
//       const closeIcon = document.getElementById("menu-close")
//       const menuIcon = document.getElementById("menu-open")

//       if (menu.style.display === "flex") {
//         menu.style.display = "none"
//         closeIcon.style.display = 'none'
//         menuIcon.style.display = 'block'
//       } else {
//         menu.style.display = "flex";
//         closeIcon.style.display = 'block'
//         menuIcon.style.display = 'none'
//       }
//     }
//   )

const LINKS = [
  {
    href: "/about",
    label: "Om oss",
    current: false,
  },
]

function LargeMenu() {
  return (
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 right-0 flex items-center">
        <button
          type="button"
          id="menu-btn"
          onClick={() => alert("Oi!")}
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Öppna menyn</span>
          <img
            alt="Icon representing a list of choices"
            src="/img/menu-light.svg"
          />
          <img
            alt="Icon representing a close-action"
            src="/img/menu-light.svg"
          />
        </button>
      </div>

      <div class="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <a href="/">
            <img
              class="block h-10 sm:h-16 md:h-24 w-auto"
              src="/img/robust-logo--light.svg"
              alt="Logotyp för Robust Tjänst av Netnod"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

function SmallMenu() {
  return (
    <div id="mobile-menu" class="justify-end" style="display: none">
      {/* // ariaCurrent ={item.current ? 'page' : undefined} */}
      <div class="px-2 pt-2 pb-3 space-y-1">
        {LINKS.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            class={`px-3 py-2 text-peach ${
              item.current
                ? ""
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Header() {
  return (
    <header>
      <nav>
        <div class="pt-4 sm:pt-16 lg:pt-16 mx-4 sm:mx-6 xl:mx-36">
          <LargeMenu />
          <SmallMenu />
        </div>
      </nav>
    </header>
  )
}
