import { Baumans } from "next/font/google";
import { Abhaya_Libre } from "next/font/google";
import { Alegreya_Sans } from "next/font/google";
import Link from "next/link";

const baumans = Baumans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
const AbhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
const AlegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

function Footer() {
  return (
    <>
      {/* footer-wrapper */}
   <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">QuickMart</h3>
              <p className="mr-2">Your one-stop shop for fresh groceries and daily essentials.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-green-300">About Us</Link></li>
                <li><Link href="#" className="hover:text-green-300">FAQs</Link></li>
                <li><Link href="#" className="hover:text-green-300">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-green-300">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>1234 Grocery Lane</p>
              <p>Foodville, FV 56789</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: support@quickmart.com</p>
            </div>
            <div className="w-full md:w-1/4">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                  <a key={social} href="#" className="hover:text-green-300">
                    <span className="sr-only">{social}</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 QuickMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
