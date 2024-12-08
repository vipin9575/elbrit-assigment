import Image from "next/image";

export const HeroAvatar = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4 items-center">
      <Image
        src={icon}
        alt="foodIcon"
        className="w-14 h-14 rounded-full"
      />
      <div>
        <h2 className="text-2xl font-medium text-[#17414F]">{title}</h2>
        <p className="text-sm font-normal text-[#727272]">{description}</p>
      </div>
    </div>
  );
};
