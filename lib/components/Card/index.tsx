import React from "react";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="relative group">
      <div className="w-full absolute h-full blur-xl touch:hidden transition-colors duration-300 group-hover:bg-PurpleNavy/050/10" />
      <div className="absolute w-full noBackgroundFilter:bg-PurpleNavy/600/95 -z-30 h-full rounded-2xl backdrop-blur-lg bg-glass-gradient" />

      <div className="relative overflow-hidden shadow-CardShadowMedium rounded-2xl">
        <svg className="absolute left-0 z-20 top-0 w-full h-full">
          <defs>
            <linearGradient gradientTransform="rotate(60)" id="linear">
              <stop offset="0%" stopColor="rgba(146, 124, 255, 0.71)" />
              <stop offset="100%" stopColor="rgba(64, 201, 162, 0.24)" />
            </linearGradient>
          </defs>

          <rect
            rx={"16px"}
            width={"100%"}
            height={"100%"}
            stroke="url(#linear)"
            strokeWidth={"2px"}
            fill="transparent"
          />
        </svg>

        <div className="relative">{children}</div>
      </div>
    </div>
  );
};

export default Card;
