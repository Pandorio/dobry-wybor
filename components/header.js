import Link from "next/link";

export default function Header() {
  return (

<div className="fixed md:absolute inset-0 z-10 h-15">
          <div className="flex h-15 bg-black/40 flex-row justify-between items-center md:max-w-6xl mx-auto py-4 px-4 border-b-[0.5px] border-gray-400/50">
              <Link href="/" className={"text-2xl md:text-4l font-bold text-white"}>
                Dobry Wybór
              </Link>

              <div className="sm:flex md:hidden flex flex-row gap-x-5 ">
                <a href='tel:+48792555483'>
                  <button className="bg-[#B59410] text-black hover:bg-gray-200 py-2 px-3 cursor-pointer"> 
                    Zadzwoń
                  </button>
                </a>
                 <Link href="https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x471bca618aaa395f:0xc76cfaef6f52fc06!3e0?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF">
                  <button className="bg-[#B59410] text-black hover:bg-gray-200  py-2 px-4  cursor-pointer"> 
                    <p>Prowadź</p>          
                  </button>
                </Link>
              </div>

              <div className="hidden md:flex">
                <div className={"gap-x-4 flex flex-col md:flex-row items-center"}>
                  <Link href="/#onas" className={"text-gray-400 hover:text-gray-300"}>
                    O nas
                  </Link>
                  <Link href="/#dlafirm" className={"text-gray-400 hover:text-gray-300"}>
                    Dla firm
                  </Link>
                  <Link href="/#produkty" className={"text-gray-400 hover:text-gray-300"}>
                    Produkty
                  </Link>
                  <Link href="/#kontakt" className={"text-gray-400 hover:text-gray-300"}>
                    Kontakt
                  </Link> 
                </div>
              </div>

              <div className="hidden md:flex">
                <Link href="#kontakt" className={"text-white hover:text-gray-300"}>
                  Jak dojechać
                </Link>
              </div>
            </div>
          </div>
  )
}