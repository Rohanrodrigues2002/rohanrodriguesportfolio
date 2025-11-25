import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particlesConfig, mobileParticlesConfig } from "@/particles/particlesConfig";

const ParticleBackground = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={isMobile ? mobileParticlesConfig : particlesConfig}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticleBackground;
