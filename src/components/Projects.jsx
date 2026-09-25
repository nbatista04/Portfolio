// src/components/Projects.jsx

import { useState } from "react";
import { useIdioma } from "../context/IdiomaContext";
import AnimateOnScroll from "./AnimateOnScroll";
import ProjectCard from "./ProjectCard";

function Projects({ datos }) {
  const { t } = useIdioma();
  const [filtroActivo, setFiltroActivo] = useState("Todos");

  //
  // 1. Extraer todas las tecnologías únicas de todos los proyectos
  //    Ejemplo: ["React", "Tailwind CSS", "Vite", "EmailJS", "Node.js"]
  //
  const todasTecnologias = [
    ...new Set(datos.projects.flatMap((p) => p.tecnologias)),
  ];
  // flatMap → junta todos los arrays de tecnologías en uno solo
  // new Set → elimina duplicados
  // [...] → convierte el Set de vuelta a array

  //
  // 2. Filtrar proyectos según la tecnología seleccionada
  //
  const proyectosFiltrados =
    filtroActivo === "Todos"
      ? datos.projects
      : datos.projects.filter((p) => p.tecnologias.includes(filtroActivo));

  return (
    <section id="projects" className="py-12 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t(datos.secciones.proyectos)}
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
        </AnimateOnScroll>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFiltroActivo("Todos")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filtroActivo === "Todos"
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            {t({ es: "Todos", en: "All" })}
          </button>

          {todasTecnologias.map((tech) => (
            <button
              key={tech}
              onClick={() =>
                setFiltroActivo(filtroActivo === tech ? "Todos" : tech)
              }
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filtroActivo === tech
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosFiltrados.map((project, index) => (
            <AnimateOnScroll key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
