import React from "react";
import Section1 from "../Component/Main/Section1";
import Section2 from "../Component/Main/Section2";
import Section3 from "../Component/Main/Section3";
import Section4 from "../Component/Main/Section4";
import Section5 from "../Component/Main/Section5";
import Section6 from "../Component/Main/Section6";
import Section7 from "../Component/Main/Section7";
import Section8 from "../Component/Main/Section8";

export default function Main() {
  return (
    <main>
      <div className="container">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </div>
    </main>
  );
}
