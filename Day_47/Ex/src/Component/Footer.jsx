import React from "react";
import "../Css/footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <span>© 2024 Made with Material Tailwind by Creative Tim.</span>
          <div>
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
              <button type="button">subscribe</button>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
