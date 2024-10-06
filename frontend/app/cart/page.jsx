import Cart from "./Cart";

export const metadata = {
  title: "Apna Bazar | Cart",
  description: "Get your daily essentials delivered to your doorstep in minutes!",
  keywords: "grocery, delivery, essentials, online shopping",
  author: "Apna Bazar Team",
  robots: "index, follow",
  openGraph: {
    title: "Apna Bazar | Cart",
    description: "Get your daily essentials delivered to your doorstep in minutes!",
    url: "https://apnabazar.com/cart",
    siteName: "Apna Bazar",
    images: [
      {
        url: "https://apnabazar.com/images/cart.png",
        width: 800,
        height: 600,
        alt: "Apna Bazar Cart",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@apnabazar",
    title: "Apna Bazar | Cart",
    description: "Get your daily essentials delivered to your doorstep in minutes!",
    image: "https://apnabazar.com/images/cart.png",
  },
};


function page() {
  return <Cart />;
}

export default page;
