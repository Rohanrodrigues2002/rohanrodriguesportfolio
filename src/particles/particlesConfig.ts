export const particlesConfig = {
  fullScreen: {
    enable: false,
    zIndex: 0
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        width: 1920,
        height: 1080
      }
    },
    color: {
      value: ["#00ffff", "#8b5cf6", "#ec4899"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
      animation: {
        enable: true,
        speed: 1,
        sync: false
      }
    },
    size: {
      value: { min: 1, max: 3 }
    },
    links: {
      enable: true,
      distance: 150,
      color: "#00ffff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none" as const,
      random: false,
      straight: false,
      outModes: "bounce" as const
    }
  },
  interactivity: {
    detectsOn: "window" as const,
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "bubble"]
      },
      onClick: {
        enable: true,
        mode: "repulse"
      },
      resize: {
        enable: true,
        delay: 0.5
      }
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 0.5
        }
      },
      bubble: {
        distance: 200,
        size: 6,
        duration: 2,
        opacity: 0.8
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  background: {
    color: "transparent"
  },
  fpsLimit: 120,
  detectRetina: true
};

export const mobileParticlesConfig = {
  ...particlesConfig,
  particles: {
    ...particlesConfig.particles,
    number: {
      value: 30,
      density: {
        enable: true,
        width: 800,
        height: 600
      }
    }
  }
};
