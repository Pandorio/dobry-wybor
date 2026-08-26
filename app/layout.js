import { Cormorant } from "next/font/google";
import Link from "next/link"
import "./globals.css";
import Foot from "@/components/foot";

const cormorant = Cormorant({ subsets: ['latin'] });

export const metadata = {
  title: "Dobry Wybór - Skład Towarów Pysznych",
  description: "Rzeczy Dobre. Dobrze Wybrane.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pl"
      className={cormorant.className}
    >

          <body className={`${cormorant.className} bg-gray-50 min-h-screen flex flex-col`}>
          <nav className="">
          
        </nav>
        <div className="grow  border-t-[0.5px] border-gray-400/50">
          {children}
        </div>
        

        <footer className="bg-[#202020]/50 py-5">
          <Foot/>
        </footer>
      </body>
    </html>
  );
}
