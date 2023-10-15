import Image from "next/image";

interface Props {
  path: string;
  children: string;
}

const Bit = ({ path, children }: Props) => {
  return (
    <div className="flex flex-col gap-6 max-w-[36rem] w-full">
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <Image src={path} alt={children} objectFit="contain" fill />
      </div>
      <p className="font-body text-center">{children}</p>
    </div>
  );
};

export default Bit;
