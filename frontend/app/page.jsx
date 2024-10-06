import Footer from "../components/Common/Footer/Footer";
import Navbar from "../components/Common/Navbar/Navbar";
import Home from "../components/Home/Home";

export const metadata = {
  title: "Apna Bazar | Home",
  description:
    "Get your daily essentials delivered to your doorstep in minutes!",
};
async function page() {
  return (
    <main className="w-full">
      <Navbar />
      <Home />

      <Footer />
    </main>
  );
}

export default page;
