import React from "react";

export interface GradientTextType {
  children: React.ReactNode | string;
}

export const GradientText: React.FC<GradientTextType> = (props) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-1 pr-1">
      {props.children}
    </span>
  );
};
