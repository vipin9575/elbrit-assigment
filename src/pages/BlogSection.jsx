import firstImg from "@/assets/image1.png";
import secondImg from "@/assets/image2.png";
import thirdImg from "@/assets/image3.png";
import fourthImg from "@/assets/image4.png";
import fifthImg from "@/assets/image5.png";

import { BlogCard } from "@/components/BlogCard";

export const BlogSection = () => {
  return (
    <div className="container mx-auto w-full max-w-6xl px-8 lg:px-16 mb-24 flex flex-col gap-8 lg:gap-16">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="uppercase text-base text-[#003569] font-semibold text-center">
          Our BLog
        </h1>
        <p className="text-3xl lg:text-5xl font-semibold text-[#17414F] text-center">Latest News</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span-1 flex flex-col gap-4">
          <BlogCard
            image={firstImg}
            title="The Covid-19 Epidemic In 2022 Is back"
            height="h-80"
          />
          <BlogCard
            image={secondImg}
            title="The Covid-19 Epidemic In 2023 Is back"
            height="h-36"
          />
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <BlogCard
            image={thirdImg}
            title="The Covid-19 Epidemic In 2022 Is back"
            height="h-36"
          />
          <BlogCard
            image={fourthImg}
            title="The Covid-19 Epidemic In 2023 Is back"
            height="h-80"
          />
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <BlogCard
            image={firstImg}
            title="The Covid-19 Epidemic In 2022 Is back"
            height="h-80"
          />
          <BlogCard
            image={fifthImg}
            title="The Covid-19 Epidemic In 2023 Is back"
            height="h-36"
          />
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <BlogCard
            image={thirdImg}
            title="The Covid-19 Epidemic In 2022 Is back"
            height="h-36"
          />
          <BlogCard
            image={fourthImg}
            title="The Covid-19 Epidemic In 2023 Is back"
            height="h-80"
          />
        </div>
      </div>
    </div>
  );
};
