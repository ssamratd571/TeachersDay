import { useState } from "react";
import "./../styles/surprise.css";

export default function Surprise() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="surprise-btn"
        onClick={() => setShow(true)}
      >
        🎁 Click For Surprise
      </button>

      {show && (
        <div
          className="popup"
          onClick={() => setShow(false)}
        >
          <div
            className="popup-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setShow(false)}
              aria-label="Close popup"
            >
              ✖
            </button>

            <div className="flowers">
              🌸 🌺 🌸 🌺 🌸
            </div>

            <img
              src="/images/teacher.jpg"
              alt="Teacher"
              className="popup-photo"
            />

            <h1>🌸 Happy Teacher's Day 🌸</h1>

            <p>
              Dear Teacher,
              <br /><br />
              Thank you for inspiring us every day.
              Your kindness, patience, and guidance
              have made us better people.
              <br /><br />
              ❤️ We are proud to be your students. ❤️
            </p>

            <div className="hearts">
              ❤️ 💖 💕 💗 💝
            </div>

            <div className="floating-hearts">
              <span>❤️</span>
              <span>💖</span>
              <span>💕</span>
              <span>💗</span>
              <span>💝</span>
            </div>

            <div className="stars">
              ✨ ⭐ ✨ ⭐ ✨
            </div>
          </div>
        </div>
      )}
    </>
  );
}