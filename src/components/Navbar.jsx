// src/components/Navbar.jsx

import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi'
import { useIdioma } from '../context/IdiomaContext'

function Navbar({ datos }) {

  const [menuAbierto, setMenuAbierto] = useState(false)
  const [hayScroll, setHayScroll] = useState(false)
  const [seccionActiva, setSeccionActiva] = useState("")

  const { idioma, cambiarIdioma, t } = useIdioma()
  //
  // Desestructuramos las 3 cosas que nos da el contexto:
  // idioma         → "es" o "en"
  // cambiarIdioma  → función para alternar
  // t              → función para traducir

  useEffect(() => {
    const handleScroll = () => {
      setHayScroll(window.scrollY > 50)

      if (window.scrollY < 300) {
        setSeccionActiva("")
        return
      }

      const secciones = datos.navegacion.map((item) => item.href.replace("#", ""))

      for (const seccion of secciones) {
        const elemento = document.getElementById(seccion)
        if (elemento) {
          const rect = elemento.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom > 100) {
            setSeccionActiva(seccion)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [datos.navegacion])

  const handleClickLink = () => {
    setMenuAbierto(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        hayScroll
          ? "bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#inicio"
            className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            {datos.personal.nick}
          </a>

          {/* Links desktop + botón idioma */}
          <div className="hidden md:flex items-center gap-8">
            {datos.navegacion.map((item) => {
              const esActivo = seccionActiva === item.href.replace("#", "")
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    esActivo
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                >
                  {t(item.nombre)}
                </a>
              )
              //
              // ANTES: {item.nombre}        → "Sobre mí"
              // AHORA: {t(item.nombre)}     → t({ es: "Sobre mí", en: "About me" })
              //                              → "Sobre mí" o "About me" según idioma
            })}

            {/* Botón de idioma */}
            <button
              onClick={cambiarIdioma}
              className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500/50 rounded-lg text-sm text-gray-300 hover:text-white transition-all"
            >
              <FiGlobe size={14} />
              {idioma === "es" ? "EN" : "ES"}
            </button>
            {/*
              Mostramos el idioma al que CAMBIARÍA (no el actual).
              
              Si estás en español → muestra "EN" (click para ir a inglés)
              Si estás en inglés  → muestra "ES" (click para ir a español)
              
              Es más intuitivo: "pulsa aquí para cambiar a EN"
            */}
          </div>

          {/* Botones móvil: idioma + hamburguesa */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={cambiarIdioma}
              className="flex items-center gap-1 px-2 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300"
            >
              <FiGlobe size={14} />
              {idioma === "es" ? "EN" : "ES"}
            </button>

            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              {menuAbierto ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuAbierto ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 px-4 py-4">
          {datos.navegacion.map((item) => {
            const esActivo = seccionActiva === item.href.replace("#", "")
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={handleClickLink}
                className={`block py-3 transition-colors ${
                  esActivo
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {t(item.nombre)}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar