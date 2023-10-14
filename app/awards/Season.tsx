import { ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode;
}

const Season = ({ name, children }: Props) => {
  return (
    <section className="">
      <h3 className="font-display text-5xl font-bold">{name}</h3>

      <div className="flex flex-col bg-yellow/50 gap-[2px]">{children}</div>
    </section>
  );
};

export default Season;
