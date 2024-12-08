import { Header } from "@/pages/Header";
import { HeroSection } from "@/pages/Hero";
import { MainSection } from "@/pages/MainSection";
import { BlogSection } from "@/pages/BlogSection";
import { Footer } from "@/pages/Footer";
import { HeroCard } from "@/pages/HeroCard";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <HeroCard />
      <MainSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
