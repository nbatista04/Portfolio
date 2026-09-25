function ParticlesBG() {

  const particulas = [
    { top: "10%", left: "15%", size: 4, delay: 0, duration: 4 },
    { top: "20%", left: "75%", size: 3, delay: 1, duration: 5 },
    { top: "40%", left: "25%", size: 5, delay: 2, duration: 6 },
    { top: "60%", left: "80%", size: 3, delay: 0.5, duration: 4.5 },
    { top: "70%", left: "10%", size: 4, delay: 1.5, duration: 5.5 },
    { top: "30%", left: "90%", size: 3, delay: 3, duration: 4 },
    { top: "80%", left: "50%", size: 4, delay: 2.5, duration: 5 },
    { top: "15%", left: "45%", size: 3, delay: 0.8, duration: 6 },
    { top: "55%", left: "60%", size: 5, delay: 1.2, duration: 4.5 },
    { top: "85%", left: "30%", size: 3, delay: 2, duration: 5 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particulas.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-400/30"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite, pulse ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
        //
        // Ahora cada partícula tiene DOS animaciones simultáneas:
        // 1. float → sube y baja suavemente
        // 2. pulse → aparece y desaparece
        //
        // Cada una con su propia duración y delay
        // para que no vayan sincronizadas
      ))}
    </div>
  )
}

export default ParticlesBG