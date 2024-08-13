import React from "react";
import "../Css/header.css";
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="#">Material Tailwind</a>
        </div>
        <nav className="tag">
          <ul>
            <li>
              <a href="">Page</a>
            </li>
            <li>
              <a href="">Account</a>
            </li>
            <li>
              <a href="">Docs</a>
            </li>
          </ul>
        </nav>
        <div className="connect">
          <button type="button" className="sign-in">
            sign in
          </button>
          <button type="button" className="blocks">
            blocks
          </button>
        </div>
      </div>
    </header>
  );
}
