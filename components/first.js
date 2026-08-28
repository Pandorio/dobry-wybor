import { Dot, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function First() {
    return (
        <>
            <div className="relative flex items-center py-40 md:py-50">
                    <div 
                        className="absolute inset-0 bg-cover bg-center -z-10 "
                        style={{
                            backgroundImage: "url('/assets/header.jpg')"
                        }}>

                    <div className="absolute inset-0 bg-black/70"></div>
                    </div>

                    <div className="relative px-4 w-[40vw] left-[10vw] ">
                    <div className="flex gap-2 text-[#B59410] mb-4">
                        Wino
                        <Dot></Dot>
                        Whisky
                        <Dot></Dot>
                        Delikatesy
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        <p>Rzeczy Dobre.</p>
                        <p className="text-[#B59410] italic">Dobrze Wybrane.</p>
                    </h1>
                    <p className="text-sm md:text-2xl text-gray-200">
                        Alkohole premium, eleganckie prezenty i delikatesy, po które chce się wracać. Pomożemy Ci wybrać - bez będnego zadęcia.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 mt-6 my-4">
                        <Link href="/#produkty" className={"text-white hover:text-gray-300"}>
                            <button className="bg-[#B59410] text-black hover:bg-gray-200  py-2 px-2  cursor-pointer"> Poznaj naszą ofertę </button>
                        </Link>
                        <Link href="/#kontakt" className={"text-white hover:text-gray-300"}>
                            <button className="bg-black/50 text-white hover:bg-gray-200 hover:text-black py-2 px-4 cursor-pointer border-white/50 border-[0.5px] justify-center items-center flex gap-2"> 
                                <div className="gap-2 items-center flex"> 
                                    <p>Odwiedź nas</p>       
                                    <ArrowRight className="w-3 h-3 color-white/50" />
                                </div> 
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
            </>
    )

}