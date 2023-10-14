interface Props {
  event: string;
  award: string;
}

const Award = ({ event, award }: Props) => {
  return (
    <div className="w-full py-4 text-xl font-bold bg-black font-display flex justify-between">
      <div>{event}</div>
      <div>{award}</div>
    </div>
  );
};

export default Award;
