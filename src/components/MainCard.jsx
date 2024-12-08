export const MainCard = ({ bgImage, title, description }) => {
  return (
    <div
      className="bg-no-repeat w-full bg-center bg-contain h-48 p-8 flex flex-col justify-between"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div>
        <h1 className="text-lg sm:text-xl text-[#2D3F59]">{title}</h1>
        <p className="text-[#727272] text-sm pr-8">{description}</p>
      </div>
      <p
        className="uppercase text-sm underline text-[#003569] font-medium
      "
      >
        See more
      </p>
    </div>
  );
};
