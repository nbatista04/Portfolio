// src/components/Hero.jsx

import { useState, useEffect } from "react";
import { FiArrowRight, FiMail, FiDownload } from "react-icons/fi";
import { useIdioma } from "../context/IdiomaContext";
import ParticlesBG from "./ParticlesBG";
import ScrollIndicator from "./ScrollIndicator";

function Hero({ datos }) {
  const [cargado, setCargado] = useState(false);
  const { t } = useIdioma();

  useEffect(() => {
    const timer = setTimeout(() => setCargado(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 bg-gray-900"
    >
      {/*
        CAMBIOS del fondo:
        
        1. relative → para posicionar partículas y scroll indicator
        2. bg-gradient-to-b → gradiente de arriba a abajo
           from-gray-900 → empieza oscuro
           via-gray-900 → se mantiene oscuro en el medio
           to-gray-800 → termina un poco más claro
           
        Esto crea una transición suave hacia la sección About (bg-gray-800)
      */}

      <ParticlesBG />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/*
          relative z-10 → el texto queda POR ENCIMA de las partículas
          Sin esto, las partículas podrían tapar el texto
        */}

        <div
          className={`transition-all duration-700 ${
            cargado ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="text-blue-400 text-lg font-medium">
            {t(datos.hero.saludo)}
          </span>
        </div>

        <h1
          className={`text-5xl md:text-7xl font-bold text-white mt-4 mb-6 transition-all duration-700 delay-200 ${
            cargado ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {t(datos.personal.nombre)}
        </h1>

        <p
          className={`text-xl md:text-2xl text-gray-400 mb-8 transition-all duration-700 delay-300 ${
            cargado ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {t(datos.personal.titulo)}
        </p>

        <p
          className={`text-gray-500 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-500 ${
            cargado ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {t(datos.personal.descripcion)}
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 ${
            cargado ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
          >
            {t(datos.hero.botonProyectos)}
            <FiArrowRight />
          </a>

          <a
            href={datos.hero.cvLink}
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-semibold transition-colors"
          >
            <FiDownload />
            {t(datos.hero.botonCV)}
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 rounded-lg font-semibold transition-colors"
          >
            <FiMail />
            {t(datos.hero.botonContacto)}
          </a>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

export default Hero;