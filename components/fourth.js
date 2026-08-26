import { Check } from "lucide-react";

export default function Fourth(){
    return (
        <>
            <div className="relative flex items-center justify-center text-black/75 bg-[#F5EBC5] py-20">   
                <div className="max-w-6xl mx-auto px-4 flex flex-col">
                    <div className="flex md:items-center justify-center justify-between flex-col md:flex-row gap-x-50">

                        <div className="relative px-4 w-[40vw] flex flex-col mb:flex-row ">
                            <div className="flex gap-2 text-[#B59410] mb-4 text-lg font-semibold">
                            PREZENTY I WSPÓŁPRACA
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 ">
                            <p>Dobry prezent</p>
                            <p className="text-[#B59410] italic">robi dobre wrażenie.</p>
                            </h1>
                        </div>

                        <div>
                            <div className="relative sm:w-[50vw] md:w-[25vw] font-semibold text-xl  border-b-[0.5px] border-gray-400/50 py-5">
                                Komponujemy eleganckie zestawy dla bliskich, klientów i zespołów.
                                Dobierzemy zawartość, opakowanie oraz liczbę zestawó do Twoich potrzeb.
                            </div>
                            <div className="py-5 border-b-[0.5px] border-gray-400/50">
                                <div>
                                    <Check className="w-4 h-4 text-[#B59410] mr-2 inline" />
                                    <span>Zestawy na każdą okazję</span>
                                </div>
                                <div>
                                    <Check className="w-4 h-4 text-[#B59410] mr-2 inline" />
                                    <span>Obsługa zamówień firmowych</span>
                                </div>
                                <div>
                                    <Check className="w-4 h- text-[#B59410] mr-2 inline" />
                                    <span>Różne warianty budżetowe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}