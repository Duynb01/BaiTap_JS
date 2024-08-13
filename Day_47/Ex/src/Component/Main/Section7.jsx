import React from "react";
import "../../Css/section7.css";
import logo1 from "../../Assets/Images/logo-coinbase.svg";
import logo2 from "../../Assets/Images/logo-spotify.svg";
import logo3 from "../../Assets/Images/logo-pinterest.svg";
import logo4 from "../../Assets/Images/logo-google.svg";
import logo5 from "../../Assets/Images/logo-amazon.svg";
import logo6 from "../../Assets/Images/logo-netflix.svg";
export default function Section7() {
  return (
    <section className="client-trust">
      <h5>popular clients</h5>
      <h2>Trusted by over 10,000+ clients</h2>
      <div>
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
