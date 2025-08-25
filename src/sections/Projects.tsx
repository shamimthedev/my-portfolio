import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import ArrowUpRightDownIcon from '@/assets/icons/arrow-up-right.svg'
import CheckboxIcon from '@/assets/icons/check-circle.svg'
import Github from '@/assets/icons/github-icon.svg'
import { portfolioProjects } from "@/data/projects";

export const ProjectsSection = () => {
  return (
    <section id='projects' className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences." />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="p-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  {project.tech && (
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 md:uppercase font-bold tracking-widest text-xs md:text-sm text-transparent bg-clip-text">
                      {project.tech.map((item, index) => (
                        <span key={index}>
                          {item}
                          {index < project.tech.length - 1 && " • "}
                        </span>
                      ))}
                    </div>
                  )}

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={result.title}
                      >
                        <CheckboxIcon className='size-5 md:size-6' />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row mt-8 gap-4">
                    {projectIndex !== 1 && (
                      <a href={project.git} target="_blank" className="inline-flex items-center justify-center gap-2 border border-white/15 px-5 h-12 rounded-xl relative z-50" aria-label="GitHub">
                        <span className="font-semibold">GitHub</span>
                        <Github className='size-5 ' />
                      </a>
                    )}
                    <a href={project.live} target="_blank"
                      className="inline-flex items-center justify-center gap-2 border border-white bg-white text-gray-900 px-5 h-12 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 cursor-pointer relative z-50 "
                      aria-label="Live Site"
                    >
                      <span className="font-semibold w-max">Live Site</span>
                      <ArrowUpRightDownIcon className='size-6' />
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
