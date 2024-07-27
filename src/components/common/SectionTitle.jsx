import React from "react";
import FadeAnimate from "./animation/FadeAnimate";

const SectionTitle = ({ title, description }) => {
  return (
    <FadeAnimate>
      <h2 className="text-primary text-center mb-4">{title}</h2>
      <p className="text-center mb-5">{description}</p>
    </FadeAnimate>
  );
};

export default SectionTitle;
