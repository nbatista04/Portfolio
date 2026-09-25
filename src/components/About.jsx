// src/components/About.jsx

import { useIdioma } from "../context/IdiomaContext";
import AnimateOnScroll from "./AnimateOnScroll";

function About({ datos }) {
  const { t } = useIdioma();

  const categorias = [
    ...new Set(datos.skills.map((skill) => t(skill.categoria))),
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t(datos.about.titulo)}
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
        </AnimateOnScroll>

        {/* Presentación */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <AnimateOnScroll direction="left">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-lg rotate-6"></div>
                <div className="relative w-64 h-64 rounded-lg overflow-hidden ring-2 ring-blue-500/40">
                  <img
                    src={datos.about.avatar}
                    alt="Avatar"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line mb-8">
                {t(datos.about.descripcion)}
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Skills */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((categoria, index) => (
            <AnimateOnScroll key={categoria} delay={index * 150}>
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                <h4 className="text-blue-400 font-semibold mb-4">
                  {categoria}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {datos.skills
                    .filter((skill) => t(skill.categoria) === categoria)
                    .map((skill) => (
                      <span
                        key={skill.nombre}
                        className="px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-600 hover:border-blue-500/50 hover:text-blue-400 transition-colors"
                      >
                        {skill.nombre}
                      </span>
                    ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;