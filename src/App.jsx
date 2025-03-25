import { useState } from "react";
import { AlignRight, X } from "lucide-react";
import "./App.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="brand">Numetry</h1>
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <AlignRight size={24} />}
          </button>
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
      Hello
    </>
  );
}
