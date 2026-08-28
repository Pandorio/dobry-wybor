export default function Second(){
    return (
        <>
        <div className="relative flex items-center justify-center text-black/75 bg-[#F5EBC5] py-20">   
            <div className="max-w-6xl mx-auto  flex flex-col">
                <div className="flex md:items-center justify-between flex-col md:flex-row gap-x-50">

                <div className="relative px-4 w-[60vw] flex flex-col mb:flex-row ">
                    <div className="flex gap-2 text-[#B59410] mb-4 text-lg font-semibold">
                    NASZA SELEKCJA
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 ">
                    <p>Nie wszystko.</p>
                    <p className="text-[#B59410] italic">Tylko to, co dobre.</p>
                    </h1>
                </div>

                <div className="relative sm:w-[50vw] md:w-[25vw] font-semibold text-xl px-5">
                    Wybieramy produkty, które sami chcielibyśmy postawić na stole lub wręczyć w prezencie. 
                    Znamy nasz asortyment i chętnie podpowiemy coś dopasowanego do okazji oraz budżetu.
            </div>

        </div>


        <div className="relative text-black/75 flex items-center justify-center flex-col md:flex-row mt-10 gap-1">
            <div className="relative shadow-xs ml-5 mr-5 bg-[#F2DEA8] sm:w-[60vw] sm:h-[20vh] md:w-[30vw] md:h-[30vh] xl:w-[50vw] xl:h-[40vh] hover:shadow-lg hover:bg-[#C9B878] hover:translate-y-[-10px] transition-all duration-300 ease-in-out flex items-center justify-center font-bold md:text-4xl cursor-pointer flex-col ">
                <div className="py-5 md:py-0">
                    <p className="md:absolute left-10 md:text-2xl xl:text-5xl bottom-25 xl:px-0 px-5">Wina</p>
                    <p className="md:absolute bottom-10 left-10 text-sm pr-5 xl:px-0 px-5">Butelki na wieczór, kolację i wyjątkowy prezent - od sprawdzonych klasyków po mniej oczywiste regiony.</p>
                </div>
            </div>

            <div className="relative shadow-xs ml-5 mr-5 bg-[#D7C681] sm:w-[60vw] sm:h-[20vh] md:w-[30vw] md:h-[30vh] xl:w-[50vw] xl:h-[40vh] hover:shadow-lg hover:bg-[#C9B878] hover:translate-y-[-10px] transition-all duration-300 ease-in-out flex items-center justify-center font-bold md:text-4xl cursor-pointer flex-col  ">
                <div className="py-5 md:py-0">
                    <p className="md:absolute left-10  md:text-2xl xl:text-5xl px-5 xl:px-0 bottom-25">Whisky i mocne alkohole</p>
                    <p className="md:absolute bottom-10 left-10 px-5 text-sm xl:px-0 pr-5 " >Starannie wybrane whisky, rumy, koniaki i alkohole kolekcjonerskie dla osób, które szukają jakości.</p>
                </div>
            </div>

            <div className="relative shadow-xs ml-5 mr-5 bg-[#F2DEA8] sm:w-[60vw] sm:h-[20vh] md:w-[30vw] md:h-[30vh] xl:w-[50vw] xl:h-[40vh] hover:shadow-lg hover:bg-[#C9B878] hover:translate-y-[-10px] transition-all duration-300 ease-in-out flex items-center justify-center font-bold md:text-4xl cursor-pointer flex-col ">
                <div className="py-5 md:py-0">
                    <p className="md:absolute left-10  md:text-2xl xl:text-5xl px-5 xl:px-0 bottom-25">Delikatesy</p>
                    <p className="md:absolute bottom-10  px-5 left-10 text-sm xl:px-0 pr-5">Dodatki, które dopełniają dobry wybór: produkty premium, eleganckie opakowania i gotowe kompozycje.</p>
                </div>
            </div>
        </div>
      </div>
        
    </div>
        </>
    )
}