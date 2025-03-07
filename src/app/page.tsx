import Header from "@/sections/Header";
import HeroSection from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/Projects";
import {TapeSection} from '@/sections/Tape'

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
    </>
  );
}
