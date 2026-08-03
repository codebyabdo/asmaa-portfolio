import { ReactNode, memo, useRef } from "react";
import { m, useReducedMotion } from "framer-motion";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
  disableAnimation?: boolean;
}

function PageTransition({ 
  children, 
  className, 
  disableAnimation = false 
}: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();
  const nodeRef = useRef<HTMLDivElement>(null);

  // If animations should be disabled or user prefers reduced m
  if (disableAnimation || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      ref={nodeRef}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1],
        opacity: { duration: 0.3 }
      }}
      className={className}
      // Performance optimizations
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </m.div>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(PageTransition);