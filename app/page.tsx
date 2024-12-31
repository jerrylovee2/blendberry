import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";

import FreshAdditions from "@/components/FreshAdditions";
import CustomerFavorites from "@/components/CustomerFavorites";
import HappyPlace from "@/components/HappyPlace";
import TestimonialSlider from "@/components/testimonial";
import Connect from "@/components/Connect";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <FreshAdditions/>
      <CustomerFavorites/>
      <HappyPlace/>
      <TestimonialSlider/>
      <Connect/>
    </main>
  );
}