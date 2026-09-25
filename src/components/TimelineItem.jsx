// src/components/TimelineItem.jsx

import { useIdioma } from '../context/IdiomaContext'
import AnimateOnScroll from './AnimateOnScroll'

function TimelineItem({ item, tipo, index }) {

  const { t } = useIdioma()

  return (
    <AnimateOnScroll delay={index * 200}>
      <div className="relative pl-8 pb-12 border-l-2 border-gray-700 last:pb-0">

        <div className="absolute left-0 top-0 w-4 h-4 -translate-x-2.25 rounded-full bg-blue-500 border-4 border-gray-800"></div>

        <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-lg font-bold text-white">
              {t(tipo === "experiencia" ? item.puesto : item.titulo)}
            </h3>
            <span className="text-blue-400 text-sm font-medium">
              {t(item.periodo)}
            </span>
          </div>

          <p className="text-gray-400 text-sm mb-3">
            {t(tipo === "experiencia" ? item.empresa : item.institucion)}
          </p>

          <ul className="text-gray-500 text-sm leading-relaxed list-disc list-inside space-y-1">
            {t(item.descripcion).split('\n').map((linea, i) => (
              <li key={i}>{linea}</li>
            ))}
          </ul>

          {item.tecnologias && (
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tecnologias.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </AnimateOnScroll>
  )
}

export default TimelineItem