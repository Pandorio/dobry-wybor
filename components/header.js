import Link from "next/link";

export default function Header() {
  return (

<div className="absolute inset-0 bg-black/40  z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:max-w-6xl mx-auto py-4 px-4 border-b-[0.5px] border-gray-400/50">
              <Link href="/" className={"text-xl font-bold text-white"}>
                Dobry Wybór
              </Link>

              <div className={"gap-x-4 flex flex-col md:flex-row items-center"}>
                <Link href="/#onas" className={"text-gray-400 hover:text-gray-300"}>
                  O nas
                </Link>
                <Link href="#dlafirm" className={"text-gray-400 hover:text-gray-300"}>
                  Dla firm
                </Link>
                <Link href="/#produkty" className={"text-gray-400 hover:text-gray-300"}>
                  Produkty
                </Link>
                <Link href="/#kontakt" className={"text-gray-400 hover:text-gray-300"}>
                  Kontakt
                </Link> 
                
              </div>

              <div>
                <Link href="#kontakt" className={"text-white hover:text-gray-300"}>
                  Jak dojechać
                </Link>
              </div>
            </div>
          </div>
  )
}