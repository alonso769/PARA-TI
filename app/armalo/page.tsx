"use client"

import { useState } from "react"
import { MagicWandContainer, MagicWandTile } from "@/components/ui/magic-wand"
import { Flower, Gift, Package, Check } from "lucide-react"

export default function ArmaloTuMismo() {
  // Estado para guardar las selecciones del usuario
  const [seleccion, setSeleccion] = useState<{
  base: string | null;
  flor: string | null;
  extra: string | null;
}>({ base: null, flor: null, extra: null });

  return (
    <div className="bg-stone-950 min-h-screen p-10 text-white">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif mb-4">El Taller de los Sueños</h1>
        <p className="text-stone-400">Pasa la varita, elige tus componentes y arma tu ramo único.</p>
      </div>

      <MagicWandContainer className="justify-center gap-4">
        {/* Paso 1: Base */}
        <MagicWandTile
          image="https://images.unsplash.com/photo-1549497538-303792a5080d?q=80&w=600"
          icon={{ icon: Package, className: "text-rose-400" }}
          className="cursor-pointer"
          onClick={() => setSeleccion({...seleccion, base: 'Canasta Elegante'})}
        />
        {/* Paso 2: Flores */}
        <MagicWandTile
          image="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600"
          icon={{ icon: Flower, className: "text-purple-400" }}
          className="cursor-pointer -ml-10"
          onClick={() => setSeleccion({...seleccion, flor: 'Rosas Silvestres'})}
        />
        {/* Paso 3: Detalles */}
        <MagicWandTile
          image="https://images.unsplash.com/photo-1597403921234-e818b2098695?q=80&w=600"
          icon={{ icon: Gift, className: "text-amber-400" }}
          className="cursor-pointer -ml-10"
          onClick={() => setSeleccion({...seleccion, extra: 'Tarjeta Dedicatoria'})}
        />
      </MagicWandContainer>

      {/* Resumen del Pedido */}
      <div className="mt-20 max-w-md mx-auto bg-stone-900/50 p-6 rounded-3xl border border-stone-800">
        <h2 className="text-xl font-serif mb-4 flex items-center gap-2">
          <Check className="text-green-500" /> Resumen de tu diseño
        </h2>
        <ul className="text-stone-400 space-y-2">
          <li>Base: {seleccion.base || "Por elegir..."}</li>
          <li>Flores: {seleccion.flor || "Por elegir..."}</li>
          <li>Detalle: {seleccion.extra || "Por elegir..."}</li>
        </ul>
        <button className="w-full mt-6 py-3 bg-rose-600 rounded-xl hover:bg-rose-500 transition-colors">
          Confirmar y Enviar Diseño
        </button>
      </div>
    </div>
  )
}