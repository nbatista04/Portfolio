// src/components/Footer.jsx

import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'
import { useIdioma } from '../context/IdiomaContext'

function Footer({ datos }) {

  const { t } = useIdioma()
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 bg-gray-800 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-400 text-sm inline-flex items-center gap-1">
            © {year} {datos.personal.nombre}. {t(datos.footer.hechoCon)}
            <FiHeart className="text-blue-400" size={14} />
            React + Tailwind
          </p>

          <div className="flex gap-4">
            <a
              href={datos.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={datos.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiLinkedin size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer