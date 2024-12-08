import vitaminC from "@/assets/vitaminC.png";
import vitaminB from "@/assets/vitaminB.png";
import magnesium from "@/assets/Mg.png";
import lacto from "@/assets/Lacto.png";
import ha from "@/assets/HA.png";
import { MainCard } from "@/components/MainCard";

export const MainSection = () => {
  return (
    <div className="container mx-auto w-full max-w-6xl mt-20 px-8 lg:px-16 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr,1fr,1fr] gap-4">
        <div>
          <div className="flex flex-col gap-4">
            <h4 className="uppercase text-sm lg:text-base text-[#003569] font-semibold">
              INgredients
            </h4>
            <h2 className="text-3xl lg:text-5xl text-[#17414F]">Better Ingredients</h2>
            <p className="text-[#727272] text-sm lg:text-xs">
              Only the best when you choose products offered on our platform -
              high-quality ingredients for high quality products!
            </p>
          </div>
        </div>
        <MainCard
          bgImage={vitaminC}
          title="Vitamin C"
          description="Vitamin C as ascorbic acid"
        />
        <MainCard
          bgImage={vitaminB}
          title="Vitamin B3"
          description="Niacin for healthy gut and skin"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr,1fr,1fr,0.5fr] gap-4">
        <MainCard
          bgImage={magnesium}
          title="Magnesium"
          description="Boost energy and support muscle function"
        />
        <MainCard
          bgImage={ha}
          title="Hyaluronic Acid"
          description="For smooth, supple and soft skin!"
        />
        <MainCard
          bgImage={lacto}
          title="Lactobacillus"
          description="Invigorate your gut microbiome"
        />
        <div className="flex flex-col items-center space-y-4 justify-center">
          <div className="w-20 h-20 bg-blue-200 rounded-br-[100%]"></div>
          <div className="w-20 h-20 bg-yellow-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
