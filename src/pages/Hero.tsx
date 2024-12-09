import tabletBox from "@/assets/tabletBox.png";
import bgImage from "@/assets/bgTabletBox.png";
import Image from "next/image";
import foodIcon from "@/assets/foodIcon.png";
import vitaminsIcon from "@/assets/vitaminsIcon.jpg";
import weightLossIcon from "@/assets/weightLossIcon.png";
import { HeroAvatar } from "@/components/HeroAvatar";

const HeroSection = () => {
  return (
    <div className="container mx-auto mt-20 pb-56 bg-[#E2F5FB] relative">
      <div className="flex flex-col gap-6 items-center pt-16 w-full max-w-6xl mx-auto  px-4 lg:px-24">
        <h1 className="text-4xl sm:text-6xl lg:text-[105px] tracking-normal text-center font-bold font-jost text-[#003569]">
          Essential Vitamins
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-24 lg:gap-8 px-4 lg:px-10">
          <div className="col-span-1 self-center lg:self-end justify-self-center">
            <div className="flex flex-col justify-center gap-4 px-2">
              <p className="text-[#727272] font-normal text-lg sm:text-xl lg:text-2xl">
                Online Medical Supplies
              </p>
              <p className="text-[#17414F] font-medium text-2xl sm:text-3xl">
                Get Your Vitamins <br /> & Minerals
              </p>
              <button className="w-full sm:w-auto max-w-36 px-6 sm:px-8 py-2 bg-[#17414F] text-white rounded-full">
                Explore
              </button>
            </div>
          </div>
          <div className="col-span-1 relative">
            <div className=" absolute lg:bottom-0 -translate-x-4 w-40 sm:w-52 lg:w-auto">
              <Image src={bgImage} alt="bgImage" />
            </div>
            <div className="absolute top-0 -translate-x-8 -translate-y-20 w-40 sm:w-56 lg:w-72">
              <Image src={tabletBox} alt="tabletBox" />
            </div>
          </div>
          <div className="col-span-1 mt-36 lg:mt-0 justify-self-center">
            <div className="flex flex-col gap-4">
              <HeroAvatar
                icon={vitaminsIcon}
                title="Vitamins"
                description="Increased Vitamins and minerals in your diet"
              />
              <HeroAvatar
                icon={foodIcon}
                title="Weight Loss"
                description=" Weight Loss Find scientifically proven solutions"
              />
              <HeroAvatar
                icon={weightLossIcon}
                title="Functional Foods"
                description="Functional Foods From protein powers to baby formula"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 self-start mt-8 lg:mt-16 ms-4lg:mb-12">
          <div className="size-5 bg-gray-600/60 rounded-full"></div>
          <div className="size-5 bg-gray-600/60 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
