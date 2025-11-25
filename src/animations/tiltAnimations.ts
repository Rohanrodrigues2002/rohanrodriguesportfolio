export const tilt3D = {
  initial: {},
  whileHover: {
    rotateX: 5,
    rotateY: 5,
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

export const tiltParallax = (x: number, y: number) => ({
  transform: `perspective(1000px) rotateX(${y * 0.1}deg) rotateY(${x * 0.1}deg)`,
  transition: "transform 0.1s ease-out"
});
