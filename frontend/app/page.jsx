import Footer from "../components/Common/Footer/Footer";
import Navbar from "../components/Common/Navbar/Navbar";
import Home from "../components/Home/Home";
import ProductCard from "@components/Common/Cards/ProductCard";
import Carousel from "../components/Home/Carousel";
function page() {
  return (
    <main className="w-full">
      <Navbar />
      <Home />
      <div className="p-5">
        <ProductCard />
      </div>
      <Footer />
    </main>
  );
}

export default page;
