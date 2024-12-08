export const BlogCard = ({ image, title, height }) => {
  return (
    <div
      className={`bg-no-repeat w-full bg-cover bg-center py-16 px-4 relative rounded-lg z-0 ${height}`}
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="absolute top-6 -left-2 w-20 h-6 text-center text-white text-xs lg:text-sm rounded-r-xl bg-[#003569] z-2 px-2 py-0.5">
        20 APR
      </div>
      <p className="text-white font-semibold text-xs lg:text-sm">{title}</p>
    </div>
  );
};
