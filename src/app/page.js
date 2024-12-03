import ProjectCard from "./components/ProjectCard";
import projectsData from "../app/data/projectsData";

export default function Home() {
  return (
    <section className="flex flex-col justify-around w-full lg:flex-row">
      <div className="flex flex-col mt-10 max-w-lg gap-8">
        <h1 className="text-5xl font-bold font-bebas text-stone-200 uppercase">⛏️⛏️ Arrancamos ⛏️⛏️</h1>
        <p className="text-lg font-grotesk"> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. </p>
        <div className="flex flex-row">
          <ul className="flex flex-row justify-center gap-5"> 
            <li><a href="https://www.linkedin.com/in/paula-velez/" target="_blank" rel="noopener noreferrer" className="text-lg font-grotesk mt-8">Linkedin</a></li>
            <li><a href="https://github.com/paulavelezz" target="_blank" rel="noopener noreferrer" className="text-lg font-grotesk mt-8">Github</a></li>
            <li><a href="https://www.behance.net/___paulavelez" target="_blank" rel="noopener noreferrer" className="text-lg font-grotesk mt-8">Behance</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 lg:mt-10">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}