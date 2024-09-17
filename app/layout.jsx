import localFont from "next/font/local";
import {Outfit} from 'next/font/google';
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Theme Provider
import { ThemeProvider } from "@/components/ThemeProvider";



const outfit = Outfit({subsets: ['latin']}); 

export const metadata = {
  title: "Browndon's Portfolio",
  description: "Showcasing my best Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
