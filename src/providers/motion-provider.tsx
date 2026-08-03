"use client";

import {
  LazyMotion,
  domAnimation,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";
import { memo, ReactNode } from "react";

interface MotionProviderProps {
  children: ReactNode;
}

function MotionProviderComponent({ children }: MotionProviderProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "never"}>
      <LazyMotion strict features={domAnimation}>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}

const MotionProvider = memo(MotionProviderComponent);

MotionProvider.displayName = "MotionProvider";

export default MotionProvider;
