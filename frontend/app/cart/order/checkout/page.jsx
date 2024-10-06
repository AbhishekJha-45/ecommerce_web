import Checkout from "./Checkout";

export const metadata = {
  title: "Apna Bazar | Checkout",
  description:
    "Get your daily essentials delivered to your doorstep in minutes!",
  keywords: "checkout, online shopping, grocery delivery, payment",
  author: "Apna Bazar Team",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  charset: "UTF-8",
  // Open Graph tags
  openGraph: {
    title: "Apna Bazar | Checkout",
    description:
      "Get your daily essentials delivered to your doorstep in minutes!",
    url: "https://apnabazar.com/checkout",
    siteName: "Apna Bazar",
    images: [
      {
        url: "https://apnabazar.com/images/checkout.png",
        width: 800,
        height: 600,
        alt: "Apna Bazar Checkout",
      },
    ],
    locale: "en_US",
  },
  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    site: "@apnabazar",
    title: "Apna Bazar | Checkout",
    description:
      "Get your daily essentials delivered to your doorstep in minutes!",
    image: "https://apnabazar.com/images/checkout.png",
  },
  // Additional meta tags
  themeColor: "#ffffff",
  // Favicon
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

function CheckoutPage() {
  return <Checkout />;
}

export default CheckoutPage;
