interface Props {
  path: string;
  name: string;
}

const Member = ({ path, name }: Props) => {
  return <div className="w-32 h-32 rounded-lg overflow-hidden"></div>;
};

export default Member;
