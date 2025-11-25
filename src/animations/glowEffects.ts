export const glowPulse = {
  initial: { 
    boxShadow: "0 0 10px hsl(var(--neon-cyan) / 0.3)" 
  },
  animate: {
    boxShadow: [
      "0 0 10px hsl(var(--neon-cyan) / 0.3)",
      "0 0 30px hsl(var(--neon-cyan) / 0.6)",
      "0 0 10px hsl(var(--neon-cyan) / 0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const neonHover = {
  initial: {},
  whileHover: {
    boxShadow: "0 0 30px hsl(var(--neon-cyan) / 0.8)",
    scale: 1.02,
    transition: { duration: 0.3 }
  }
};

export const shadowPop = {
  initial: {},
  whileHover: {
    y: -5,
    boxShadow: "0 10px 40px hsl(var(--neon-violet) / 0.4)",
    transition: { duration: 0.2 }
  }
};
