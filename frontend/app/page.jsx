import Footer from "../components/Common/Footer/Footer";
import Navbar from "../components/Common/Navbar/Navbar";
import Home from "../components/Home/Home";


async function page() {
  return (
    <main className="w-full">
      <Navbar/>
      <Home />
      <Footer />
    </main>
  );
}

export default page;
