import Image from "next/image";

export const FooterCard = ({image, title, desc}) => {
  return (
    <div className="col-span-1 flex gap-4 bg-[#215D72] py-4 px-5 rounded-lg">
      <Image src={image} alt="phone" className="size-12" />
      <div>
        <h2 className="text-white text-sm">{title}</h2>
        <p className="text-[#D9D9D9] text-sm text-normal font-medium">{desc}</p>
      </div>
    </div>
  );
};
