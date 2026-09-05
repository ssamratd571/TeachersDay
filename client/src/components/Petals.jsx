import { useEffect } from "react";
import "./../styles/petals.css";

export default function Petals() {
  useEffect(() => {
    const emojis = ["🌸", "🌺", "💮"];

    const createPetal = () => {
      const petal = document.createElement("div");

      petal.className = "petal";
      petal.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

      petal.style.left = Math.random() * 100 + "vw";
      petal.style.fontSize = (20 + Math.random() * 25) + "px";
      petal.style.animationDuration = (8 + Math.random() * 8) + "s";
      petal.style.opacity = Math.random();

      document.body.appendChild(petal);

      setTimeout(() => petal.remove(), 18000);
    };

    const timer = setInterval(createPetal, 300);

    return () => clearInterval(timer);
  }, []);

  return null;
}