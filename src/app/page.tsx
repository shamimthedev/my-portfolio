import Header from "@/sections/Header";
import HeroSection from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/Projects";
import {TapeSection} from '@/sections/Tape'
import {TestimonialsSection} from '@/sections/Testimonials'
import {AboutSection} from '@/sections/About'
import {ContactSection} from '@/sections/Contact'
import {FooterSection} from '@/sections/Footer'

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
      <TestimonialsSection/>
      <AboutSection/>
      <ContactSection/>
      <FooterSection/>
    </>
  );
}
