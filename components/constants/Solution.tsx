import React, { useState } from "react";

type HideSolutionProps = {
  children: React.ReactNode;
};

export default function HideSolution({ children }: HideSolutionProps) {
  const [hide, setHide] = useState<boolean>(true);
  const textButton = hide ? "Show" : "Hide";

  const handleToggleVisibility = () => {
    setHide((prevVis) => !prevVis);
  };
  return (
    <>
      <button className="linkToExercise" onClick={handleToggleVisibility}>
        {textButton}
      </button>
      {hide ? null : children}
    </>
  );
}
