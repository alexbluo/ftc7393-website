import { ReactNode } from "react";
import { Metadata } from "next";
import { Bebas_Neue, Lato,  } from "next/font/google";
import NavBar from "./components/NavBar";
import "../index.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--bebas-neue",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--lato",
});

export const metadata: Metadata = {
  title: "Electron Volts 7393",
  description: "",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${lato.variable} bg-black`}>
        <NavBar />
        <main className="font-display text-yellow container mx-auto px-16 pt-36 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
