// src/components/ProjectCard.jsx

import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useIdioma } from "../context/IdiomaContext";

function ProjectCard({ project }) {
  const { t } = useIdioma();

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={project.imagen}
          alt={t(project.titulo)}
          className="w-full h-48 object-cover object-top border-b border-gray-700"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">
          {t(project.titulo)}
        </h3>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {t(project.descripcion)}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tecnologias.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <FiGithub size={16} />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors text-sm"
          >
            <FiExternalLink size={16} />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
