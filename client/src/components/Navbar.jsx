import "./../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🌸 Happy Teacher's Day 🌸</div>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Message</a></li>
      </ul>
    </nav>
  );
}