import Image from "next/image";
import logo from "@/assets/image.png";

const Header = () => {
  return (
    <div className="w-full fixed top-0 bg-white z-50">
      <div className="container mx-auto flex items-center py-1.5 px-36">
        <Image src={logo} alt="logo" className="w-auto h-14" />
      </div>
    </div>
  );
};

export default Header;
