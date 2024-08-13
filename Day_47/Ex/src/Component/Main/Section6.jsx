import React from "react";
import "../../Css/section6.css";
import avatar1 from "../../Assets/Images/avatar1.jpg";
import avatar2 from "../../Assets/Images/avatar2.jpg";
import avatar3 from "../../Assets/Images/avatar3.jpg";
export default function Section6() {
  return (
    <section className="client-feedback">
      <div>
        <h2>What Clients Say</h2>
        <p>
          Discover what clients have to say about their experiences working with
          me. My client's satisfaction is my greatest achievement!
        </p>
      </div>
      <div>
        <div>
          <h2>Mobile App Development</h2>
          <p>
            I had the pleasure of working with Lily on a critical web
            development project, and I can confidently say that their expertise
            and professionalism exceeded my expectations
          </p>
          <span>Michale - Technical Manager</span>
          <span>Marketing @ APPLE INC.</span>
          <div>
            <img src={avatar1} alt="" />
            <div></div>
            <img src={avatar2} alt="" />
            <div></div>
            <img src={avatar3} alt="" />
          </div>
        </div>
        <div>
          <img src={avatar1} alt="" />
        </div>
      </div>
    </section>
  );
}
