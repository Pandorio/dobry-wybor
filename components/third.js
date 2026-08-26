export default function Third() {
  return (
    <>
        <div className="relative flex  text-white">
        <div className="mx-auto flex px-4 flex-col md:flex-row h-full">
          <div>
            <div className="w-[50vw] h-full" style={{ backgroundImage: "url('/assets/header2.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}/>     
          </div>
          <div>
            <div className=" bg-black text-white relative flex flex-col gap-y-4 py-20">
              <p className="text-lg font-bold text-[#B59410]">DOBRY WYBÓR</p>
              <h1 className="text-5xl md:text-7xl font-bold">Sklep z charakterem.</h1>
              <h1 className="text-5xl md:text-7xl font-bold text-[#B59410] italic">Doradztwo bez presji.</h1>
              <p className="text-lg py-10 border-b-[0.5px] border-gray-400/50">
                Nie musisz znać roczników, regionów ani trudnych nazw. Wystarczy, że powiesz nam, czego szukasz, na jaką okazję i w jakim budżecie.
                My zajmiemy się resztą - zaproponujemy kilka trafnych opcji i krótko wyjaśnimy różnice.
              </p>
              <div className="flex flex-col md:flex-row gap-x-10 gap-y-4 text-lg font-semibold py-5">
                <div>
                  <p className="text-[#B59410] text-2xl">Premium</p>
                  <p>staranna selekcja</p>
                  </div>
                <div>
                  <p className="text-[#B59410] text-2xl">Po ludzku</p>
                  <p>konkretne doradzwo</p>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}