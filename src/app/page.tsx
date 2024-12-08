import Footer from "./components/Footer/Footer";
import Categories from "./components/Home/Categories";
import ExploreProducts from "./components/Home/ExploreProducts";
import Featured from "./components/Home/Featured";
import HomeLanding from "./components/Home/HomeLanding";
import ProductListing from "./components/Home/ProductListing";
import Support from "./components/Home/Support";
import ProductListing2 from "./components/Home/ProductListing2";
import SpeakerAdd from "./components/Home/SpeakerAdd";


export default function Home() {
  return (
    <main>
      <HomeLanding />
      <ProductListing />
      <Categories />
      <ProductListing2 />
      <SpeakerAdd />
      <ExploreProducts />
      <Featured />
      <Support />
    </main>
  );
}
