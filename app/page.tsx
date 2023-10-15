// TODO: add logo
import Image from "next/image";
import Bit from "./components/Bit";

const Index = () => {
  return (
    <div className=" w-full flex flex-col gap-6 items-center justify-center">
      <div className="relative w-64 aspect-[6591/7542]">
        <Image src="/logo.png" alt="logo" fill objectFit="contain" />
      </div>
      <h1 className="text-7xl md:text-9xl font-bold text-center">
        ELECTRON VOLTS
      </h1>
      <div className="relative w-[36rem] aspect-video">
        <Image src="/team_at_worlds_2023.jpg" alt="worlds team" fill />
      </div>
      <p className="w-[36rem]">
        Electron Volts is a community team located in Silver Spring, MD composed
        of both homeschool and public school students ranging from 9th to 12th
        grade. We began FTC in 2013 and take pride in our ability to maintain a
        balance between a cohesive laid-back group of friends and an ambitious
        team that takes what we love seriously. We strive to learn as much as we
        can about STEM and the engineering process and to spread that love for
        learning throughout and outside of the FIRST community while making sure
        to uphold gracious professionalism in everything we do.
      </p>
    </div>
  );
};

export default Index;
