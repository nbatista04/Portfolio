// src/hooks/useScrollAnimation.js

import { useRef, useEffect, useState } from 'react'

function useScrollAnimation(opciones = {}) {
  //                         ↑
  // Parámetro con valor por defecto
  // Si no le pasan opciones, usa un objeto vacío {}

  // Desestructuramos las opciones con valores por defecto
  const {
    threshold = 0.1,
    // threshold = umbral = qué porcentaje del elemento debe ser visible
    // 0.1 = 10% del elemento visible es suficiente para activar
    // 0 = apenas asoma un píxel
    // 1 = tiene que estar 100% visible

    rootMargin = "0px 0px -50px 0px",
    // Márgenes del "marco de detección"
    // Formato: "arriba derecha abajo izquierda"
    // "-50px" abajo = el elemento debe entrar 50px dentro de la pantalla
    //                  antes de que se active la animación
    // Esto evita que se active justo en el borde (se ve mejor)
  } = opciones

  // Referencia al elemento que queremos observar
  const elementRef = useRef(null)

  // Estado: ¿el elemento es visible?
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Guardamos una copia de la referencia actual
    // (necesario para la limpieza)
    const element = elementRef.current

    // Si no hay elemento (todavía no se ha montado), no hacer nada
    if (!element) return

    // Crear el Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        // entries es un array de elementos observados
        // Como solo observamos UNO, usamos entries[0]
        const entry = entries[0]

        if (entry.isIntersecting) {
          // isIntersecting = true cuando el elemento ENTRA en pantalla
          setIsVisible(true)

          // Dejamos de observar (la animación solo ocurre una vez)
          observer.unobserve(element)
          // Si no hiciéramos esto, la animación se repetiría
          // cada vez que el elemento entre/salga de pantalla
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    // Empezar a observar el elemento
    observer.observe(element)

    // Limpieza: dejar de observar cuando el componente desaparezca
    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin])
  // ↑ Dependencias: si cambian las opciones, recrear el observer

  // Devolvemos DOS cosas:
  return { elementRef, isVisible }
  // elementRef → para poner en el elemento con ref={elementRef}
  // isVisible  → para aplicar clases de animación según si es visible o no
}

export default useScrollAnimation