import storyland from "/public/images/story.png";
import keystone from "/public/images/dashboard.png";
import freelance from "/public/images/android  (1).png";
import Image from 'next/image';
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";


const portfolioProjects = [
  {
    company: "Keystone Group Algeria",
    title: "IoT & Network Security System",
    results: [
      { title: "Developed an embedded system for network scanning" },
      { title: "Integrated IoT devices for real-time monitoring" },
      { title: "Built a dashboard for data visualization and alerts" },
    ],
    image: keystone,
  },
  {
    company: "Android dev",
    title: "Interactive Storytelling Android App",
    results: [
      { title: "Delivers a delightful and educational experience for kids" },
      { title: "Includes immersive audio, animations, and interactive slides" },
      { title: "Features story search, favorites, and an extensive library" },
    ],
    link: "https://github.com/Feddane/Storyland",
    image: storyland,
  },
  {
    company: "Freelance Client",
    
    title: "Reclamation & Access Management Web App",
    results: [
      { title: "Created a role-based access control system" },
      { title: "Built admin/user/supervisor dashboards using Flask & JS" },
      { title: "Handled real-time data and feedback submission flows" },
    ],
    link: "https://github.com/Feddane/Djezzy",
    image: freelance,
  },
  

];


export const ProjectsSection = () => {
  return <div>
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">Real-world Results</p>
          <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
          <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">See how I transform concepts into engaging digital experiences.</p>
        </div>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card key={project.title} className="bg-gray-800  z-0 overflow-hidden rounded-3xl px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky "
            style={{
              top: `calc(64px + ${projectIndex * 40}px)`,
            }}>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16 ">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                  </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6"/>
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>

                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                )}

                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-2xl shadow-lg"
                  />
                </div>

              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </div>;
};
