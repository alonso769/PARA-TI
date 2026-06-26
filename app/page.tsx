import DigitalPetalsShader from "@/components/ui/digital-petals-shader";
import { ArrowRight, ShoppingBag, Heart, Sparkles } from "lucide-react";

// Lista de datos: Aquí puedes agregar, quitar o editar tus flores fácilmente
const CATALOGO_FLORES = [
  {
    id: 1,
    nombre: "Hechizo de Medianoche",
    precio: "S/. 140",
    imagen: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    nombre: "Aura Solar",
    precio: "S/. 115",
    imagen: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    nombre: "Eterno Idilio",
    precio: "S/. 165",
    imagen: "https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    nombre: "Suspiro de Primavera",
    precio: "S/. 95",
    imagen: "https://images.unsplash.com/photo-1563241592-36c189b7d341?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    nombre: "Pasión Carmesí",
    precio: "S/. 180",
    imagen: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    nombre: "Brisa Silvestre",
    precio: "S/. 125",
    imagen: "https://images.unsplash.com/photo-1591884639591-66c3a10e6d63?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 7,
    nombre: "Canto de Luna",
    precio: "S/. 150",
    imagen: "https://images.unsplash.com/photo-1550993510-1845bd524b02?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 8,
    nombre: "Dulce Nostalgia",
    precio: "S/. 110",
    imagen: "https://images.unsplash.com/photo-1519340333755-56e9c1d04079?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 9,
    nombre: "Fuego Andino",
    precio: "S/. 135",
    imagen: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 10,
    nombre: "Nube de Algodón",
    precio: "S/. 85",
    imagen: "https://images.unsplash.com/photo-1508611130088-75618451debc?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 11,
    nombre: "Abrazo Cálido",
    precio: "S/. 130",
    imagen: "https://images.unsplash.com/photo-1587314168485-69c00b0f490f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 12,
    nombre: "Jardín Secreto",
    precio: "S/. 175",
    imagen: "https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 13,
    nombre: "Poesía Pura",
    precio: "S/. 145",
    imagen: "https://images.unsplash.com/photo-1603513361251-50e58619bcbb?q=80&w=600&auto=format&fit=crop",
  }
];

export default function Home() {
  return (
    <main className="bg-stone-950 text-stone-100 font-sans selection:bg-rose-500 selection:text-white">
      
      {/* 1. SECCIÓN PORTADA (HERO) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Nuestro componente mágico de fondo */}
        <DigitalPetalsShader />

        {/* Contenido superpuesto */}
        <div className="z-10 text-center px-6 mix-blend-lighten select-none">
          <h1 className="text-6xl md:text-8xl font-serif text-white font-extralight tracking-widest mb-6">
            PARA <span className="italic text-rose-400 font-normal">TI</span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl font-light mb-10 max-w-lg mx-auto">
            Diseños florales interactivos. Mueve tu cursor para sentir la textura de nuestros pétalos digitales.
          </p>

          {/* Botón con ancla al catálogo */}
          <a 
            href="#catalogo"
            className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 text-white text-sm uppercase tracking-widest rounded-full inline-flex items-center gap-3 mx-auto hover:bg-rose-500 hover:border-rose-500 transition-all duration-300 pointer-events-auto cursor-pointer"
          >
            Ver Catálogo <ArrowRight className="w-4 h-4 animate-pulse" />
          </a>
        </div>
      </section>

      {/* 2. SECCIÓN DEL CATÁLOGO */}
      <section id="catalogo" className="relative z-10 bg-stone-950 px-6 py-24 border-t border-stone-900">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-rose-400 font-semibold flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-3 h-3" /> Colección de autor
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-extralight tracking-wide text-white">
              Arreglos Diseñados <span className="italic font-normal text-stone-400">Para Ti</span>
            </h2>
          </div>

          {/* Rejilla responsive: 1 columna en móviles, 2 en tablets, 3 en pantallas grandes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Función Map: Recorre la lista y dibuja una tarjeta por cada flor */}
            {CATALOGO_FLORES.map((flor) => (
              <div 
                key={flor.id} 
                className="group relative bg-stone-900/40 border border-stone-800 rounded-3xl overflow-hidden transition-all duration-500 hover:border-stone-700 hover:-translate-y-2"
              >
                <div className="h-[400px] overflow-hidden relative">
                  <img 
                    src={flor.imagen} 
                    alt={flor.nombre} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <button className="absolute top-4 right-4 p-3 bg-stone-900/60 backdrop-blur-md rounded-full text-stone-300 hover:text-rose-400 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="p-6 flex justify-between items-center bg-stone-900/50">
                  <div>
                    <h3 className="text-xl font-serif text-stone-200">{flor.nombre}</h3>
                    <p className="text-rose-400 text-sm mt-1">{flor.precio}</p>
                  </div>
                  <button className="p-3 bg-stone-800 rounded-xl group-hover:bg-rose-500 transition-colors">
                    <ShoppingBag className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}