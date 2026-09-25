// src/context/IdiomaContext.jsx

import { createContext, useContext, useState } from 'react'

// 1. Crear el contexto (la "frecuencia de radio")
const IdiomaContext = createContext()

// 2. Crear el Provider (la "emisora")
function IdiomaProvider({ children }) {
  //
  // children = todo lo que envuelve este componente
  //
  // <IdiomaProvider>
  //   <App />            ← esto es children
  // </IdiomaProvider>

  const [idioma, setIdioma] = useState("es")

  const cambiarIdioma = () => {
    setIdioma((actual) => (actual === "es" ? "en" : "es"))
  }

  // Función "t" (translate)
  // Resuelve un texto que puede ser string o { es, en }
  const t = (texto) => {
    // Si es null o undefined, devolver string vacío
    if (texto == null) return ""
    //
    // == null captura tanto null como undefined
    // Es uno de los pocos casos donde == (doble igual) es útil
    // null == null      → true
    // undefined == null → true
    // 0 == null         → false
    // "" == null        → false

    // Si es un string normal, devolverlo tal cual
    if (typeof texto === "string") return texto
    //
    // typeof devuelve el tipo de un valor como string:
    // typeof "hola"   → "string"
    // typeof 42       → "number"
    // typeof {}       → "object"
    // typeof true     → "boolean"
    //
    // Si el texto ya es un string (como "Nahuel Batista"),
    // no hay nada que traducir, lo devolvemos directamente

    // Si es un número, devolverlo como string
    if (typeof texto === "number") return String(texto)

    // Si es un objeto con traducciones, devolver el idioma actual
    if (texto[idioma]) return texto[idioma]
    //
    // texto = { es: "Sobre mí", en: "About me" }
    // idioma = "es"
    // texto["es"] → "Sobre mí" ✅
    //
    // idioma = "en"
    // texto["en"] → "About me" ✅

    // Fallback: si no tiene el idioma, intentar español, luego inglés
    return texto.es || texto.en || ""
    //
    // || (OR lógico) devuelve el primer valor "truthy"
    // Si texto.es existe → lo devuelve
    // Si no, si texto.en existe → lo devuelve
    // Si ninguno existe → devuelve ""
  }

  // El "value" es lo que todos los componentes hijos podrán leer
  const value = { idioma, cambiarIdioma, t }
  //
  // idioma        → "es" o "en" (para saber qué idioma está activo)
  // cambiarIdioma → función para alternar entre idiomas
  // t             → función para traducir textos

  return (
    <IdiomaContext.Provider value={value}>
      {children}
    </IdiomaContext.Provider>
  )
  //
  // IdiomaContext.Provider es un componente especial de React
  // Todo lo que esté dentro de él puede acceder a "value"
  //
  // Es como una emisora de radio:
  // - value = la señal que emite
  // - children = todos los que pueden sintonizar
}

// 3. Hook personalizado para consumir el contexto
function useIdioma() {
  const context = useContext(IdiomaContext)
  //
  // useContext(IdiomaContext) = "sintonizar" el contexto
  // Devuelve el "value" del Provider más cercano
  // Es decir: { idioma, cambiarIdioma, t }

  if (!context) {
    throw new Error("useIdioma debe usarse dentro de IdiomaProvider")
    //
    // Si alguien usa useIdioma() fuera del Provider,
    // context será undefined y lanzamos un error claro
    // en vez de un error críptico de "cannot read property of undefined"
  }

  return context
}

// Exportamos ambos
export { IdiomaProvider, useIdioma }
//
// export { } = named exports (exportaciones con nombre)
// Se importan con: import { IdiomaProvider, useIdioma } from '...'
//
// vs export default = solo puede haber uno por archivo
// Se importa con: import LoQueSea from '...'
//
// Un archivo puede tener AMBOS tipos de export