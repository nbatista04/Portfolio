// src/components/Contact.jsx

import { useState, useRef } from 'react'
//                   ↑
// useRef es un hook que crea una "referencia" a un elemento del DOM
// Lo necesitamos porque emailjs.sendForm() necesita acceso
// directo al formulario HTML

import emailjs from '@emailjs/browser'
import { FiMail, FiMapPin, FiGlobe, FiGithub, FiLinkedin, FiSend, FiLoader, FiAlertCircle } from 'react-icons/fi'
import { useIdioma } from '../context/IdiomaContext'
import AnimateOnScroll from './AnimateOnScroll'

function Contact({ datos }) {

  const { t } = useIdioma()

  const formRef = useRef()
  //
  // useRef() crea un objeto { current: null }
  // Cuando lo conectamos a un elemento con ref={formRef},
  // React automáticamente pone el elemento real en formRef.current
  //
  // formRef.current → el <form> del DOM real
  //
  // ¿Por qué necesitamos esto?
  // emailjs.sendForm() necesita el formulario HTML real,
  // no el estado de React. Lee los valores directamente
  // de los <input> del formulario usando sus atributos "name".

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  })
  //
  // CAMBIO IMPORTANTE en los nombres:
  // ANTES: nombre, email, mensaje
  // AHORA: from_name, from_email, message
  //
  // Estos nombres DEBEN coincidir con las {{variables}}
  // de la plantilla de EmailJS:
  //   {{from_name}}  → from_name
  //   {{from_email}} → from_email
  //   {{message}}    → message

  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState(false)
  // Nuevo estado para manejar errores de envío

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviando(true)
    setError(false)

    // Comprobar si EmailJS está configurado
    if (!datos.emailjs.serviceId || !datos.emailjs.templateId || !datos.emailjs.publicKey) {
      console.log("EmailJS no configurado. Datos del formulario:", formData)
      setEnviando(false)
      setEnviado(true)
      setFormData({ from_name: "", from_email: "", message: "" })
      setTimeout(() => setEnviado(false), 3000)
      return
    }
    //
    // Si las variables de .env no están configuradas,
    // hacemos el comportamiento anterior (solo console.log)
    // Así la web funciona aunque no tengas EmailJS configurado

    emailjs
      .sendForm(
        datos.emailjs.serviceId,
        datos.emailjs.templateId,
        formRef.current,
        datos.emailjs.publicKey
      )
      //
      // emailjs.sendForm() envía el formulario:
      // - arg 1: ID del servicio (Gmail, Outlook...)
      // - arg 2: ID de la plantilla
      // - arg 3: el formulario HTML real (por eso usamos useRef)
      // - arg 4: tu clave pública
      //
      // Devuelve una PROMESA (Promise)
      //
      // ¿Qué es una Promesa?
      // Es un valor que TODAVÍA NO EXISTE pero existirá en el futuro.
      //
      // Cuando haces una petición a internet, no sabes cuándo llegará
      // la respuesta. Puede tardar 100ms o 5 segundos.
      //
      // Una Promesa representa esa respuesta futura:
      // - .then() → se ejecuta si todo fue BIEN
      // - .catch() → se ejecuta si algo salió MAL
      //
      // Es como pedir comida a domicilio:
      // - Haces el pedido (sendForm)
      // - Te dan un número de seguimiento (Promise)
      // - Si llega bien → .then() → comes
      // - Si hay problema → .catch() → llamas para reclamar

      .then((result) => {
        // ÉXITO: el email se envió
        console.log("Email enviado:", result.text)
        //
        // result.text suele ser "OK"
        // Es la confirmación de que EmailJS procesó el envío

        setEnviando(false)
        setEnviado(true)
        setFormData({ from_name: "", from_email: "", message: "" })
        setTimeout(() => setEnviado(false), 5000)
      })
      .catch((err) => {
        // ERROR: algo falló
        console.error("Error al enviar email:", err.text)
        //
        // console.error() es como console.log() pero en rojo
        // Se usa para errores

        setEnviando(false)
        setError(true)
        setTimeout(() => setError(false), 5000)
      })
  }

  return ( 
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">

        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t(datos.secciones.contacto.titulo)}
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto">
              {t(datos.secciones.contacto.subtitulo)}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

          {/* Info de contacto */}
          <AnimateOnScroll direction="left">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                {t(datos.contacto.infoTitulo)}
              </h3>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <FiMail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      {datos.contacto.labels.email}
                    </p>
                    <a
                      href={`mailto:${datos.personal.email}`}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {datos.personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <FiMapPin className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      {t(datos.contacto.labels.ubicacion)}
                    </p>
                    <p className="text-white">
                      {t(datos.personal.ubicacion)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <FiGlobe className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      {t(datos.contacto.labels.redes)}
                    </p>
                    <div className="flex gap-4 mt-1">
                      <a
                        href={datos.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-white hover:text-blue-400 transition-colors"
                      >
                        <FiGithub size={16} />
                        GitHub
                      </a>
                      <a
                        href={datos.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-white hover:text-blue-400 transition-colors"
                      >
                        <FiLinkedin size={16} />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </AnimateOnScroll>

          {/* Formulario */}
          <AnimateOnScroll direction="right">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/*
                ref={formRef}
                
                Conecta este <form> real del DOM con nuestra referencia.
                Después de renderizar:
                  formRef.current = este elemento <form>
                
                emailjs.sendForm() lo necesita para leer los inputs
                directamente del HTML.
              */}

              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t(datos.contacto.labels.nombre)}
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  placeholder={t(datos.contacto.placeholders.nombre)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                {/*
                  name="from_name" DEBE coincidir con {{from_name}} en la plantilla
                  
                  emailjs.sendForm() lee los inputs por su atributo "name":
                  <input name="from_name">  → {{from_name}} en el email
                  <input name="from_email"> → {{from_email}} en el email
                  <textarea name="message"> → {{message}} en el email
                */}
              </div>

              <div>
                <label
                  htmlFor="from_email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {datos.contacto.labels.email}
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  placeholder={t(datos.contacto.placeholders.email)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t(datos.contacto.labels.mensaje)}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder={t(datos.contacto.placeholders.mensaje)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={enviando}
                className={`w-full py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 ${
                  enviando
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                {enviando ? (
                  <>
                    <FiLoader className="animate-spin" />
                    {t(datos.contacto.botonEnviando)}
                  </>
                ) : (
                  <>
                    <FiSend />
                    {t(datos.contacto.botonEnviar)}
                  </>
                )}
              </button>

              {/* Mensaje de éxito */}
              {enviado && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center">
                  {t(datos.contacto.mensajeExito)}
                </div>
              )}

              {/* Mensaje de error */}
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center inline-flex items-center justify-center gap-2 w-full">
                  <FiAlertCircle />
                  {t(datos.contacto.mensajeError)}
                </div>
              )}
              {/*
                Mismo patrón que el mensaje de éxito pero en ROJO
                
                bg-red-500/10     = fondo rojo muy suave
                border-red-500/20 = borde rojo sutil
                text-red-400      = texto rojo
              */}

            </form>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  )
}

export default Contact