import { useRef, useState, ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';


interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export default function MagneticButton({ children, className, variant = "dark" }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.4, y: y * 0.4 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative rounded-full px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors overflow-hidden group",
        variant === "dark" ? "bg-luxury-charcoal text-white" : "bg-white text-luxury-charcoal",
        className
      )}
    >
      <span className="relative z-10 mix-blend-difference">{children}</span>
      <motion.div 
        className="absolute inset-0 bg-luxury-gold rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"
      />
    </motion.button>
  );
}
