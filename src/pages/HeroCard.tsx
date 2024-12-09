import icon1 from "@/assets/icon1.svg";
import icon2 from "@/assets/icon2.svg";
import icon3 from "@/assets/icon3.svg";
import icon4 from "@/assets/icon4.svg";
import icon5 from "@/assets/icon5.svg";
import icon6 from "@/assets/icon6.svg";
import Image from "next/image";

const data = [
  {
    icon: icon1,
    title: "clinically studied",
    des: "All products that we offer have undergone lab and safety tests",
  },
  {
    icon: icon2,
    title: "Vegetarian Friendly",
    des: "We have a wide selection of vegetarian products to meet your needs",
  },
  {
    icon: icon3,
    title: "Made in India",
    des: "Shop local and explore health products made right here in India",
  },
  {
    icon: icon4,
    title: "Free shipping",
    des: "We deliver to your door with no shipping costs on your orders",
  },
  {
    icon: icon5,
    title: "No Risk",
    des: "We ensure that all products are safe and within their use-by date",
  },
  {
    icon: icon6,
    title: "GMO free",
    des: "Natural, no modified products and derivatives for those who need it",
  },
];

const HeroCard = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-8 -mt-44 z-5 relative h-auto lg:h-[440px] rounded-[40px] bg-[#17414F]">
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-y-16 gap-x-8 -translate-y-10 lg:-translate-y-12">
          {data.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center justify-center gap-2 px-4"
            >
              <div className="size-16 lg:size-24 flex items-center justify-center rounded-full bg-white">
                <Image
                  src={item.icon}
                  alt="icon"
                  className="size-6 lg:size-8"
                />
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-white text-center">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base text-[#D9D9D9] text-center">
                {item.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
