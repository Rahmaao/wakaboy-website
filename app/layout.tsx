import { Inter } from "next/font/google";
import CustomFont from 'next/font/local';
import Head from "next/head";
import "./globals.css";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

const grotesque = CustomFont({
  src: '../public/fonts/ESRebondGrotesqueTRIAL-Regular-BF66189040b697b.otf',
  variable: '--font-grotesque',
})

export const metadata = {
  title: "Wakaboy Express",
  description: "Wakaboy Express – your trusted partner in seamless and efficient last-mile delivery solutions. Based in the heart of Nigeria, we're dedicated to bridging the gap between businesses and consumers with services that are not only reliable but revolutionize the way goods are transported within the region.",
  image: "/favicon.png", 
  url: "https://wakaboyexpress.com", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={`${grotesque.variable}`}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
