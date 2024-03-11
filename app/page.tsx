import Articlelist from "@/components/articlelist";
import Banner from "@/components/banner";
import EmblaCarousel from "@/components/embla-carousel";
import ScrollCard from "@/components/scrollcard";
export default function Home() {

  return (
    <div className="flex flex-col md:flex-row">
      <div className="m-4 md:w-1/2 bg-pink">
        <EmblaCarousel />
      </div>
      <div className="m-4 md:w-1/2">
        <Articlelist />
      </div>
    </div>
  ); 
}
