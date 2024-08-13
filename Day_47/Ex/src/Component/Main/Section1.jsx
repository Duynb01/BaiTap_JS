import React from "react";
import image from "../../Assets/Images/image-7.svg";
import "../../Css/section1.css";
export default function Section1() {
  return (
    <section className="title">
      <div className="info">
        <h1>Welcome to my Web Development Portofolio!</h1>
        <p>
          I'm Lily Smith, a passionate web developer based in USA.
          <br />
          Here, you'll get a glimpse of my journey in the world of web
          development, where creativity meets functionality.
        </p>
        <label htmlFor="email">Your email</label>
        <form>
          <input type="email" id="email" placeholder=" " />
          <span>Enter your email</span>
          <button type="submit">require offer</button>
        </form>
        <span>
          Read my <span className="under-l">Terms and Conditions</span>
        </span>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </section>
  );
}
