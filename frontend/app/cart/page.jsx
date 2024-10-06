import Cart from "./Cart";

export const metadata = {
  title: "Apna Bazar | Cart",
  description: "Get your daily essentials delivered to your doorstep in minutes!",
  keywords: "grocery, delivery, essentials, online shopping",
  author: "Apna Bazar Team",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  charset: "UTF-8",
  // Open Graph tags
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
  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    site: "@apnabazar",
    title: "Apna Bazar | Cart",
    description: "Get your daily essentials delivered to your doorstep in minutes!",
    image: "https://apnabazar.com/images/cart.png",
  },
  // Additional meta tags
  themeColor: "#ffffff",
  // Favicon
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


function page() {
  return <Cart />;
}

export default page;
