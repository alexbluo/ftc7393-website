import { ReactNode } from "react";
import { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import NavBar from "./components/NavBar";
import "../index.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--bebas-neue",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--outfit",
});

export const metadata: Metadata = {
  title: "Electron Volts 7393",
  description: "",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${outfit.variable} bg-black`}>
        <NavBar />
        <main className="font-display text-yellow container mx-auto px-16 pt-48 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
