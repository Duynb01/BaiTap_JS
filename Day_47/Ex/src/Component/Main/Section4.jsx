import React from "react";
import "../../Css/section4.css";
import figure1 from "../../Assets/Images/blog-1.svg";
import figure2 from "../../Assets/Images/blog2.svg";
import figure3 from "../../Assets/Images/blog3.svg";
import figure4 from "../../Assets/Images/blog4.svg";
export default function Section4() {
  const data = [
    {
      src: figure1,
      title: "Mobile App Development",
      para: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    },
    {
      src: figure2,
      title: "Landing Page Development",
      para: "Promotional landing page for a fitness website Summer Campaign. Form development included.",
    },
    {
      src: figure3,
      title: "Mobile App Development",
      para: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    },
    {
      src: figure4,
      title: "E-commerce development",
      para: "Ecommerce website offering access to the latest and greatest gadgets and accessories.",
    },
    {
      src: figure1,
      title: "Mobile App Development",
      para: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    },
    {
      src: figure2,
      title: "Landing Page Development",
      para: "Promotional landing page for a fitness website Summer Campaign. Form development included.",
    },
    {
      src: figure3,
      title: "Mobile App Development",
      para: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    },
    {
      src: figure4,
      title: "E-commerce development",
      para: "Ecommerce website offering access to the latest and greatest gadgets and accessories.",
    },
  ];
  return (
    <section className="projects">
      <div>
        <h2>My Projects</h2>
        <p>
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I'm here to turn your digital dreams
          into reality.
        </p>
      </div>
      <div className="project-description">
        {data.map((item, index) => (
          <article key={index}>
            <img src={item.src} alt="" />
            <h4>{item.title}</h4>
            <p>{item.para}</p>
            <button type="button">see details</button>
          </article>
        ))}
      </div>
    </section>
  );
}
