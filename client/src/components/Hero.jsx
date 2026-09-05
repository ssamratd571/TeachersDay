import { motion } from "framer-motion";
import Surprise from "./Surprise";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-container">

        {/* Left Content */}
        <motion.div
          className="hero-left"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>🌸 Happy Teacher's Day 🌸</h1>

          <p>
            A teacher takes a hand,
            <br />
            opens a mind,
            <br />
            and touches a heart forever.
          </p>

          <Surprise />
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="hero-right"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/teacher.jpg"
            alt="Teacher"
            className="teacher-image"
          />
        </motion.div>

      </div>
    </section>
  );
}