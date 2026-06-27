"use client"

import { createContext, useContext, useRef, useState, useEffect, type ReactNode } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Image, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type MagicWandContextType = {
    mousePosition: { x: number; y: number }
}

const MagicWandContext = createContext<MagicWandContextType | undefined>(undefined)

export function useMagicWand() {
    const context = useContext(MagicWandContext)
    if (!context) {
        throw new Error("Magic Wand components must be used within a MagicWandContainer")
    }
    return context
}

interface MagicWandContainerProps {
    children: ReactNode
    className?: string
    wandClassName?: string
}

export function MagicWandContainer({ children, className, wandClassName }: MagicWandContainerProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springX = useSpring(x, { damping: 25, stiffness: 200 })
    const springY = useSpring(y, { damping: 25, stiffness: 200 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            x.set(e.clientX)
            y.set(e.clientY)
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [x, y])

    return (
        <MagicWandContext.Provider value={{ mousePosition }}>
            <div className={cn("flex w-full h-full min-h-[400px]", className)}>
                {/* Nuevo "Pincel de Luz" en lugar de la varita */}
                <motion.div
                    className={cn(
                        "w-[30vmin] aspect-square absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 z-[100] rounded-full mix-blend-screen pointer-events-none blur-3xl",
                        wandClassName,
                    )}
                    style={{
                        x: springX,
                        y: springY,
                        background: "radial-gradient(circle, rgba(251,113,133,0.15) 0%, rgba(0,0,0,0) 70%)",
                    }}
                />
                {children}
            </div>
        </MagicWandContext.Provider>
    )
}

interface IconConfig {
    icon?: LucideIcon
    className?: string
}

interface MagicWandTileProps {
    image: string
    icon?: IconConfig | LucideIcon
    className?: string
    onClick?: () => void
}

export function MagicWandTile({ image, icon, className, onClick }: MagicWandTileProps) {
    const { mousePosition } = useMagicWand()
    const tileRef = useRef<HTMLDivElement>(null)
    const [tileState, setTileState] = useState({ opacity: 0, blur: 10 })

    let IconComponent: LucideIcon = Image
    let iconClassName = "text-[8vmin] text-white/30" // Íconos más sutiles

    if (icon) {
        if (typeof icon === "function") {
            IconComponent = icon
        } else {
            if (icon.icon) IconComponent = icon.icon
            if (icon.className) iconClassName = cn(iconClassName, icon.className)
        }
    }

    useEffect(() => {
        if (!tileRef.current) return
        const updateTileState = () => {
            const rect = tileRef.current?.getBoundingClientRect()
            if (!rect) return
            const relativeMouseX = mousePosition.x - rect.left
            const relativeMouseY = mousePosition.y - rect.top
            
            // Lógica ajustada para que reaccione mejor al centro de la tarjeta
            const distanceX = Math.abs(relativeMouseX - rect.width / 2)
            const distanceY = Math.abs(relativeMouseY - rect.height / 2)
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
            
            const maxDistance = rect.width;
            const revealIntensity = Math.max(0, 1 - (distance / maxDistance))

            setTileState({
                opacity: revealIntensity,
                blur: (1 - revealIntensity) * 10,
            })
        }
        updateTileState()
    }, [mousePosition])

    return (
        <div
            ref={tileRef}
            onClick={onClick}
            className={cn(
                "tile grid place-items-center w-full max-w-[40vmin] aspect-square bg-stone-900 border border-stone-800 rounded-3xl relative overflow-hidden transition-all duration-300 hover:border-stone-600 hover:scale-[1.02]",
                className,
            )}
        >
            <div className="z-10 bg-stone-950/60 p-4 rounded-full backdrop-blur-md">
                <IconComponent className={iconClassName} />
            </div>
            <motion.img
                src={image}
                alt="Diseño floral"
                className="h-full w-full absolute left-0 top-0 object-cover"
                style={{
                    opacity: tileState.opacity,
                    filter: `blur(${tileState.blur}px)`,
                }}
                transition={{ duration: 0.1 }}
            />
        </div>
    )
}