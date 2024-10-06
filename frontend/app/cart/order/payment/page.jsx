import Payment from "./Payment";
export const metadata = {
  title: "Apna Bazar | Payment",
  description: "Get your daily essentials delivered to your doorstep in minutes!",
  keywords: "payment, online shopping, grocery delivery, secure checkout",
  author: "Apna Bazar Team",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  charset: "UTF-8",
  // Open Graph tags
  openGraph: {
    title: "Apna Bazar | Payment",
    description: "Get your daily essentials delivered to your doorstep in minutes!",
    url: "https://apnabazar.com/payment",
    siteName: "Apna Bazar",
    images: [
      {
        url: "https://apnabazar.com/images/payment.png",
        width: 800,
        height: 600,
        alt: "Apna Bazar Payment",
      },
    ],
    locale: "en_US",
  },
  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    site: "@apnabazar",
    title: "Apna Bazar | Payment",
    description: "Get your daily essentials delivered to your doorstep in minutes!",
    image: "https://apnabazar.com/images/payment.png",
  },

};

function PaymentPage() {
  return <Payment />;
}

export default PaymentPage;