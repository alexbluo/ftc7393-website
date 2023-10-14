// intro pg, portfolio, award history

import Bit from "app/components/Bit";

const About = () => {
  return (
    <div className="">
      <h2 className="">ABOUT</h2>
      <div className="flex flex-col gap-24 w-full items-center">
        <Bit path="/logo.png">
          Electron Volts is a community team located in Silver Spring, MD
          composed of both homeschool and public school students ranging from
          9th to 12th grade. We began FTC in 2013 and take pride in our ability
          to maintain a balance between a cohesive laid-back group of friends
          and an ambitious team that takes what we love seriously. We strive to
          learn as much as we can about STEM and the engineering process and to
          spread that love for learning throughout and outside of the FIRST
          community while making sure to uphold gracious professionalism in
          everything we do.
        </Bit>
      </div>
    </div>
  );
};

export default About;
