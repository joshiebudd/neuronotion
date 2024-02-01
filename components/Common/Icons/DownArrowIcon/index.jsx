import Image from "next/image";

const Index = ({ color }) => {
  return (
    <div className="flex items-center justify-center relative">
      <Image
        src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/down_arrow.png"
        height={42}
        width={42}
      ></Image>
    </div>
  );
};

export default Index;
