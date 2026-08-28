import { ArrowUpRight,SquareParking,Phone,Mail, Pin } from 'lucide-react';
import Link from "next/link";

export default function Fifth() {
    return (
         <>
            <div className="relative flex items-center justify-center text-white bg-black">   
                <div className="max-w-8xl mx-auto flex flex-col  ">
                    <div className="flex items-center justify-between flex-col md:flex-row ">

                        <div className="relative w-[60vw] flex flex-col mb:flex-row md:border-r-[0.5px] border-gray-400/50" >
                            <div className="pt-20 pb-8 md:py-20 border-b-[0.5px] md:border-b-0 mb-5">
                                <div className="flex gap-2 text-[#B59410] mb-4 text-lg font-semibold">
                                    <p>ODWIEDŹ NAS</p>
                                </div>
                                <div className="text-5xl md:text-7xl font-bold mb-6 ">
                                    <p>Twój Dobry Wybór</p>
                                    <p className="text-[#B59410] italic">jest tutaj.</p>
                                </div>
                                <div className="py-3">
                                    <div className="flex  gap-x-2">
                                        <Pin className="text-[#B59410] h-4 w-4"/>
                                        <p>Adres sklepu</p>
                                    </div>
                                    <p className="font-bold text-lg">ul. Sowińskiego 42, Łódź</p>
                                </div>
                                
                                <div className="md:w-90 md:h-60 sm:w-40 sm:h-20">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.7039290449366!2d19.44581597648917!3d51.81157027188406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bca6220661307%3A0x7a9277c9508a293f!2sDobry%20Wyb%C3%B3r%20-%20Sk%C5%82ad%20Towar%C3%B3w%20Pysznych!5e0!3m2!1spl!2spl!4v1787915724957!5m2!1spl!2spl"
                                    width="100%"
                                    height="100%"
                                    allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                                </div>

                                <div className="flex flex-col md:flex-row gap-4 mt-6 my-4 ">
                                    <Link href="https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x471bca618aaa395f:0xc76cfaef6f52fc06!3e0?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF">
                                        <button className="bg-[#B59410] text-black hover:bg-gray-200  py-2 px-4  cursor-pointer"> 
                                            <div className="gap-2 items-center flex"> 
                                                <p>Wyznacz trasę</p>          
                                                <ArrowUpRight className="w-3 h-3"/>                        
                                            </div>  
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="md:ml-10 pb-20">
                            <div className="flex text-[#B59410] mb-4 text-lg font-bold">
                            <p>GODZINY OTWARCIA</p>
                            </div>
                            <div className=" sm:py-2 md:py-5 w-[20vw] flex flex-col gap-y-5">
                                <div className="border-b-[0.5px] border-gray-400/50 gap-x-10">
                                    <p className="w-48">Poniedziałek-Czwartek</p>
                                    <p className="font-bold">12:00-22:00</p>
                                </div>
                                <div className="border-b-[0.5px] border-gray-400/50  gap-x-10">
                                    <p>Piątek-Sobota</p>
                                    <p className="font-bold">10:00-22:00</p>
                                </div>
                                <div className= " border-b-[0.5px] border-gray-400/50  gap-x-10">
                                    <p>Niedziela</p>
                                    <p className="font-bold">12:00-18:00</p>
                                </div>
                            </div>
                            <div className='relative flex pt-5 gap-x-3'>
                                <Phone className="text-[#B59410] h-6 w-6"/>
                                <p>+48 792 555 483</p>
                            </div>
                            <div className='relative flex pt-5 gap-x-3'>
                                <Mail className="text-[#B59410] h-6 w-6"/>
                                <p>kontakt@dobrywybor.biz</p>
                            </div>
                            <div className='relative flex pt-5 pb-5 gap-x-3'>
                                <SquareParking className="text-[#B59410] h-6 w-6"/>
                                <p>Wygodny parking przy sklepie</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
