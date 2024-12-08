import phoneIcon from "@/assets/phoneIcon.png";
import locationIcon from "@/assets/locationIcon.png";
import emailIcon from "@/assets/mailIcon.png";
import footerLogo from "@/assets/footerLogo.png";
import { FooterCard } from "@/components/FooterCard";
import location from "@/assets/footerLocationIcon.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-[#17414F] w-full">
      <div className="container w-full md:max-w-6xl mx-auto px-8 lg:px-24 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FooterCard
            image={phoneIcon}
            title="Phone Number"
            desc="+974 3118 1843"
          />
          <FooterCard
            image={emailIcon}
            title="Email Address"
            desc="Elbrithcqhr@gmail.com"
          />
          <FooterCard
            image={locationIcon}
            title="Office Location"
            desc="Ambassador Street, Zone 61,"
          />
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="col-span-1">
            <Image src={footerLogo} alt="footerLogo" className="w-60" />
          </div>
          <div className="col-span-1">
            <p className="text-white text-xs">
              Your health, physical and emotional well-being is important to us.
              We are always by your side and have made it even easier for you to
              find the necessary vitamins.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <p className="text-white text-sm flex gap-4">
            <Image src={location} alt="location" className="w-3 h-4"/>
            Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
            400051
          </p>
        </div>
      </div>
    </div>
  );
};
