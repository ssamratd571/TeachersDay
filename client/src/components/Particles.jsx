import { useEffect } from "react";
import "./../styles/particles.css";

export default function Particles() {

  useEffect(() => {

    const createParticle = () => {

      const particle = document.createElement("span");
      particle.className = "particle";

      particle.style.left = Math.random() * 100 + "vw";
      particle.style.animationDuration = (5 + Math.random() * 5) + "s";
      particle.style.opacity = Math.random();

      const colors = [
        "#ff69b4",
        "#ffd700",
        "#ffffff",
        "#87ceeb",
        "#ff1493"
      ];

      particle.style.background =
        colors[Math.floor(Math.random() * colors.length)];

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 10000);

    };

    const interval = setInterval(createParticle, 180);

    return () => clearInterval(interval);

  }, []);

  return null;
}