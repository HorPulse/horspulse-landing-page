// 

import Clients from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Cursor } from "@/components/Cursor";
import Footers from "@/components/Footers";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/Projects";
import Servicess from "@/components/Servicess";
import { Teams } from "@/components/Teams";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import Transform from "@/components/Transform";
import {JoinCommunity} from "@/components/JoinCommunity";
import MarketingPlan from "@/components/MarketingPlan";


export default function Home() {
  return (
     <main className="min-h-screen bg-background">
      <Cursor />
      <Navbar />
      <Hero />
      <Clients />
      <Servicess />
      <Projects />
      <Teams />
      <JoinCommunity />
      <Testimonials />
      <WhyUs />
      <Transform />
      <MarketingPlan />
      <Contact />
      <Footers />
      </main>
  );
}
