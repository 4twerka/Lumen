import React from "react";

interface ColorRoundProps {
    color: string
}

const ColorRound:React.FC<ColorRoundProps> = ({color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <circle cx="16" cy="16" r="13.5" stroke="#A3A3A3" />
      <circle cx="16" cy="16" r="10.5" fill={color} />
    </svg>
  );
};

export default ColorRound;
