import React from "react";
import "../../Css/section2.css";
import logo1 from "../../Assets/Images/logo-coinbase.svg";
import logo2 from "../../Assets/Images/logo-spotify.svg";
import logo3 from "../../Assets/Images/logo-pinterest.svg";
import logo4 from "../../Assets/Images/logo-google.svg";
import logo5 from "../../Assets/Images/logo-amazon.svg";
import logo6 from "../../Assets/Images/logo-netflix.svg";
export default function Section2() {
  return (
    <section className="clients">
      <h2>My awesome clients</h2>
      <div className="name-client">
        <img src={logo1} alt="coinbase" />
        <img src={logo2} alt="spotify" />
        <img src={logo3} alt="pinterest" />
        <img src={logo4} alt="google" />
        <img src={logo5} alt="amazon" />
        <img src={logo6} alt="netflix" />
      </div>
    </section>
  );
}
