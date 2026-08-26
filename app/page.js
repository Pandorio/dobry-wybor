import First from "../components/first";
import Second from "../components/second";
import Third from "../components/third";
import Fourth from "../components/fourth";
import Fifth from "@/components/fifth";

export default function Home() {
  return (
    <main>
      <div id="onas">
        <First/>
      </div>

      <div id="produkty">
        <Second/>
      </div>

      <div id="dlafirm"><Third/></div>
      
      <div><Fourth/></div>

      <div id="kontakt">
        <Fifth/>
      </div>
    </main>
  );
}