"use client"

import { useState } from "react"
import { MagicWandContainer, MagicWandTile } from "@/components/ui/magic-wand"
import { Flower, Gift, Package, Check, ArrowRight, RotateCcw } from "lucide-react"

// 1. Base de datos simulada con múltiples opciones
const OPCIONES = {
  bases: [
    { id: 'b1', nombre: 'Canasta Rústica', imagen: 'https://images.unsplash.com/photo-1549497538-303792a5080d?q=80&w=600' },
    { id: 'b2', nombre: 'Florero de Cristal', imagen: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=600' },
    { id: 'b3', nombre: 'Caja Premium Negra', imagen: 'https://images.unsplash.com/photo-1577900232427-18219f91fb99?q=80&w=600' },
    { id: 'b4', nombre: 'Cilindro de Cerámica', imagen: 'https://images.unsplash.com/photo-1613521140785-e85e427f8002?q=80&w=600' },
  ],
  flores: [
    { id: 'f1', nombre: 'Rosas Rojas', imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600' },
    { id: 'f2', nombre: 'Girasoles Luminosos', imagen: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=600' },
    { id: 'f3', nombre: 'Tulipanes Rosados', imagen: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600' },
    { id: 'f4', nombre: 'Orquídeas Blancas', imagen: 'https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=600' },
    { id: 'f5', nombre: 'Mix Primaveral', imagen: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=600' },
    { id: 'f6', nombre: 'Peonías Suaves', imagen: 'https://images.unsplash.com/photo-1563241592-36c189b7d341?q=80&w=600' },
  ],
  extras: [
    { id: 'e1', nombre: 'Lazo de Seda', imagen: 'https://images.unsplash.com/photo-1597403921234-e818b2098695?q=80&w=600' },
    { id: 'e2', nombre: 'Tarjeta Dedicatoria', imagen: 'https://images.unsplash.com/photo-1550993510-1845bd524b02?q=80&w=600' },
    { id: 'e3', nombre: 'Chocolates Artesanales', imagen: 'https://images.unsplash.com/photo-1540331547168-8b63109225b7?q=80&w=600' },
    { id: 'e4', nombre: 'Peluche Pequeño', imagen: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600' },
  ]
}

// Interfaz para definir qué guardamos en el estado
type ItemSeleccionado = { id: string; nombre: string; imagen: string } | null;

export default function ArmaloTuMismo() {
  const [paso, setPaso] = useState(1)
  const [seleccion, setSeleccion] = useState<{
    base: ItemSeleccionado;
    flor: ItemSeleccionado;
    extra: ItemSeleccionado;
  }>({ base: null, flor: null, extra: null })

  const titulos = {
    1: "Comencemos por la base",
    2: "Elige la flor protagonista",
    3: "El toque final"
  }

  const manejarSeleccion = (tipo: 'base' | 'flor' | 'extra', item: NonNullable<ItemSeleccionado>) => {
    setSeleccion({ ...seleccion, [tipo]: item })
    setTimeout(() => {
      if (paso < 4) setPaso(paso + 1)
    }, 400)
  }

  const reiniciarDiseno = () => {
    setSeleccion({ base: null, flor: null, extra: null })
    setPaso(1)
  }
const enviarAWhatsApp = () => {
    if (!seleccion.base || !seleccion.flor || !seleccion.extra) return;

    const numeroTelefonico = "51992401700";
    
    // Armamos el mensaje dinámicamente con las elecciones del usuario
    const mensaje = `Hola, me encantaría pedir mi diseño personalizado "Para Ti":\n\n📦 Base: ${seleccion.base.nombre}\n🌸 Flores: ${seleccion.flor.nombre}\n✨ Detalle: ${seleccion.extra.nombre}\n\n¿Me podrías brindar más información sobre el pago y envío?`;
    
    // Codificamos el texto para que los espacios y saltos de línea funcionen en una URL
    const url = `https://wa.me/${numeroTelefonico}?text=${encodeURIComponent(mensaje)}`;
    
    // Abrimos WhatsApp en una pestaña nueva
    window.open(url, '_blank');
  }
  return (
    <div className="bg-stone-950 min-h-screen p-6 md:p-10 text-white flex flex-col items-center overflow-x-hidden">
      
      <div className="text-center mb-8 max-w-2xl mt-4">
        <span className="text-xs uppercase tracking-[0.3em] text-rose-400 font-semibold mb-3 block">
          Diseñador Virtual
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-extralight tracking-wide text-white mb-4">
          Crea tu diseño <span className="italic font-normal text-stone-400">Para Ti</span>
        </h1>
        <p className="text-stone-400 text-sm md:text-base">
          Explora los elementos con tu cursor y haz clic para seleccionarlos.
        </p>
      </div>

      {paso < 4 && (
        <div className="flex gap-4 mb-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className={`h-1 w-12 md:w-16 rounded-full transition-colors duration-500 ${paso >= num ? 'bg-rose-500' : 'bg-stone-800'}`} />
          ))}
        </div>
      )}

      {paso < 4 && (
        <h2 className="text-xl md:text-2xl font-serif mb-8 text-stone-300">
          {titulos[paso as keyof typeof titulos]}
        </h2>
      )}

      {/* Grid Dinámico para las opciones */}
      {paso < 4 && (
        <MagicWandContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl justify-items-center">
          
          {paso === 1 && OPCIONES.bases.map((item) => (
            <div key={item.id} className="w-full flex flex-col items-center gap-4">
              <MagicWandTile
                image={item.imagen}
                icon={{ icon: Package, className: "text-stone-300" }}
                className={`cursor-pointer ${seleccion.base?.id === item.id ? 'border-rose-500 scale-105' : ''}`}
                onClick={() => manejarSeleccion('base', item)}
              />
              <span className="text-stone-400 font-serif text-lg">{item.nombre}</span>
            </div>
          ))}

          {paso === 2 && OPCIONES.flores.map((item) => (
            <div key={item.id} className="w-full flex flex-col items-center gap-4">
              <MagicWandTile
                image={item.imagen}
                icon={{ icon: Flower, className: "text-stone-300" }}
                className={`cursor-pointer ${seleccion.flor?.id === item.id ? 'border-rose-500 scale-105' : ''}`}
                onClick={() => manejarSeleccion('flor', item)}
              />
              <span className="text-stone-400 font-serif text-lg">{item.nombre}</span>
            </div>
          ))}

          {paso === 3 && OPCIONES.extras.map((item) => (
            <div key={item.id} className="w-full flex flex-col items-center gap-4">
              <MagicWandTile
                image={item.imagen}
                icon={{ icon: Gift, className: "text-stone-300" }}
                className={`cursor-pointer ${seleccion.extra?.id === item.id ? 'border-rose-500 scale-105' : ''}`}
                onClick={() => manejarSeleccion('extra', item)}
              />
              <span className="text-stone-400 font-serif text-lg">{item.nombre}</span>
            </div>
          ))}

        </MagicWandContainer>
      )}

      {/* Pantalla Final: Resumen Visual */}
      {paso === 4 && seleccion.base && seleccion.flor && seleccion.extra && (
        <div className="w-full max-w-2xl bg-stone-900/60 p-8 rounded-3xl border border-stone-800 backdrop-blur-md animate-in fade-in zoom-in duration-700">
          
          <div className="text-center mb-8">
            <Check className="text-green-500 w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-white">Tu Obra Maestra</h2>
            <p className="text-stone-400 mt-2">Hemos combinado tus elecciones perfectamente.</p>
          </div>

          {/* Visualización de los elementos elegidos */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10">
            <div className="relative group">
              <img src={seleccion.base.imagen} alt="Base" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl border-2 border-stone-800 shadow-xl" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                <span className="text-xs text-white uppercase tracking-wider">{seleccion.base.nombre}</span>
              </div>
            </div>
            <div className="text-rose-500 text-2xl font-light hidden md:block">+</div>
            <div className="relative group z-10 md:-ml-4">
              <img src={seleccion.flor.imagen} alt="Flor" className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-2xl border-2 border-rose-500 shadow-2xl scale-110" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                <span className="text-xs text-white uppercase tracking-wider font-bold">{seleccion.flor.nombre}</span>
              </div>
            </div>
            <div className="text-rose-500 text-2xl font-light hidden md:block">+</div>
            <div className="relative group md:-ml-4">
              <img src={seleccion.extra.imagen} alt="Detalle" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl border-2 border-stone-800 shadow-xl" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                <span className="text-xs text-white uppercase tracking-wider">{seleccion.extra.nombre}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={reiniciarDiseno}
              className="flex-1 py-4 bg-stone-800 rounded-xl hover:bg-stone-700 transition-colors flex items-center justify-center gap-2 font-semibold tracking-wide text-sm text-stone-300"
            >
              <RotateCcw className="w-4 h-4" /> Volver a armar
            </button>
            <button 
           onClick={enviarAWhatsApp}
            className="flex-1 py-4 bg-rose-600 rounded-xl hover:bg-rose-500 transition-colors flex items-center justify-center gap-2 font-semibold tracking-wide text-sm uppercase text-white"
              >
             Añadir al Carrito <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}