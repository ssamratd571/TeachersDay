import { useState } from "react";
import "./../styles/surprise.css";

export default function Surprise() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="surprise-btn" onClick={() => setShow(true)}>
        🎁 Click For Surprise
      </button>

      {show && (
        <div className="popup">

          <div className="popup-card">

            <button
              className="close"
              onClick={() => setShow(false)}
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
              Your kindness, patience and guidance
              have made us better people.
              <br /><br />
              ❤️ We are proud to be your students ❤️
            </p>

            <div className="hearts">
              ❤️ 💖 💕 💗 💝
            </div>

          </div>

        </div>
      )}
    </>
  );
}