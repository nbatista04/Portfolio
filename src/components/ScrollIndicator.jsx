// src/components/ScrollIndicator.jsx

function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      {/*
        absolute bottom-8 → pegado abajo del Hero
        left-1/2 -translate-x-1/2 → centrado horizontalmente
        animate-bounce → sube y baja suavemente
      */}

      <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
        <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        {/*
          Esto simula el "ratón" con la ruedita:
          
          ╭──────╮
          │  ██  │ ← ruedita (el div interno)
          │      │
          ╰──────╯ ← borde (el div externo)
          
          animate-pulse en la ruedita + animate-bounce en el contenedor
          = efecto de "scroll down"
        */}
      </div>
    </div>
  )
}

export default ScrollIndicator