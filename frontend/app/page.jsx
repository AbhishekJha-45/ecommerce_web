import BASE_URL from "constants/constants";
import Footer from "../components/Common/Footer/Footer";
import Navbar from "../components/Common/Navbar/Navbar";
import Home from "../components/Home/Home";
import axios from "axios";

async function page() {
  const categories = await axios.get(`${BASE_URL}/category/get-categories`);
  return (
    <main className="w-full">
      <Navbar categories={categories?.data?.message} />
      <Home />
      <Footer />
    </main>
  );
}

export default page;
