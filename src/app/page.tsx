import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Network from "@/components/Network";
import Testimonials from "@/components/Testimonials";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <Network />
      <Testimonials />
      <Subscribe />
      <Footer />
    </main>
  );
}
