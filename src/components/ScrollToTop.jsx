// src/components/ScrollToTop.jsx

import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'

function ScrollToTop() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const subirArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={subirArriba}
      className={`fixed bottom-6 right-8 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center transition-all duration-300 z-40 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <FiArrowUp size={20} />
      {/* 
        Mucho más limpio que el SVG inline ¿verdad?
        size={20} = 20px de tamaño
      */}
    </button>
  )
}

export default ScrollToTop