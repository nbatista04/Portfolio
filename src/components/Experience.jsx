// src/components/Experience.jsx

import { useState } from 'react'
import { FiBriefcase, FiBookOpen } from 'react-icons/fi'
import { useIdioma } from '../context/IdiomaContext'
import AnimateOnScroll from './AnimateOnScroll'
import TimelineItem from './TimelineItem'

function Experience({ datos }) {

  const [tabActivo, setTabActivo] = useState("experiencia")
  const { t } = useIdioma()

  const tabs = [
    { id: "experiencia", label: datos.tabs.experiencia, icon: FiBriefcase, datos: datos.experiencia },
    { id: "educacion", label: datos.tabs.educacion, icon: FiBookOpen, datos: datos.educacion },
  ]
  //
  // ANTES: label: "Experiencia"
  // AHORA: label: datos.tabs.experiencia → { es: "Experiencia", en: "Experience" }
  // Se traduce en el render con t()

  const tabSeleccionado = tabs.find((tab) => tab.id === tabActivo)

  return (
    <section id="experiencia" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">

        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t(datos.secciones.trayectoria)}
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="flex justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setTabActivo(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all inline-flex items-center gap-2 ${
                  tabActivo === tab.id
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                <tab.icon size={18} />
                {t(tab.label)}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="ml-4">
          {tabSeleccionado.datos.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              tipo={tabActivo}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience