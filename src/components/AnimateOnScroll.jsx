// src/components/AnimateOnScroll.jsx

import useScrollAnimation from '../hooks/useScrollAnimation'

function AnimateOnScroll({ children, delay = 0, direction = "up" }) {
  //                       ↑         ↑            ↑
  //                       │         │            │
  //                       │         │            └─ Desde qué dirección aparece
  //                       │         │               "up" = desde abajo
  //                       │         │               "left" = desde la izquierda
  //                       │         │               "right" = desde la derecha
  //                       │         │
  //                       │         └─ Retraso en milisegundos antes de animar
  //                       │            (para que los elementos aparezcan escalonados)
  //                       │
  //                       └─ "children" es una prop ESPECIAL de React
  //                          Contiene TODO lo que pongas DENTRO del componente
  //
  //  <AnimateOnScroll>
  //    <h1>Hola</h1>      ← esto es "children"
  //    <p>Mundo</p>        ← esto también es "children"
  //  </AnimateOnScroll>

  const { elementRef, isVisible } = useScrollAnimation()

  // Definir desde dónde viene la animación
  const directions = {
    up: "translate-y-10",       // Empieza 2.5rem más abajo
    down: "-translate-y-10",    // Empieza 2.5rem más arriba
    left: "translate-x-10",     // Empieza 2.5rem a la derecha
    right: "-translate-x-10",   // Empieza 2.5rem a la izquierda
  }
  //
  // translate-y-10  = transform: translateY(2.5rem)  → desplazado abajo
  // translate-x-10  = transform: translateX(2.5rem)  → desplazado a la derecha
  // El signo - invierte la dirección

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${directions[direction]}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Entendamos las clases:
//
// transition-all duration-700 = TODOS los cambios de estilo se animan en 700ms
//
// Si isVisible = TRUE (el elemento entró en pantalla):
//   opacity-100     = totalmente visible
//   translate-x-0   = sin desplazamiento horizontal
//   translate-y-0   = sin desplazamiento vertical
//   → El elemento está en su posición FINAL (normal)
//
// Si isVisible = FALSE (todavía no ha entrado):
//   opacity-0       = invisible
//   directions[direction] = desplazado en alguna dirección
//   → El elemento está ESCONDIDO y desplazado
//
// Cuando isVisible cambia de false a true:
//   Las clases cambian de "opacity-0 + desplazado" a "opacity-100 + posición normal"
//   transition-all anima ese cambio → efecto de aparición suave
//
// style={{ transitionDelay: `${delay}ms` }}
//   Si delay = 200, la animación espera 200ms antes de empezar
//   Útil para que los elementos aparezcan uno tras otro

export default AnimateOnScroll