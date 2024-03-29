import { useState } from "react";
import { Waypoint } from "react-waypoint";
import Image from "next/image";
import { Chip } from "../../../../components/chip/chip";
import { RichText } from "../../../../components/rich-text/rich-text";
import { ContentType, SolutionType } from "../../type";

export const Content: React.FC<ContentType> = (props) => {
  return (
    <div className="flex max-w-lg flex-col gap-6">
      <h3 className="headline-6 medium:headline-5">{props.title}</h3>
      <p className="body-1">
        <RichText value={props.body} />
      </p>
      <div className="flex flex-wrap gap-2">
        {props?.keywords?.map((keyword, index) => {
          return <Chip key={index} text={keyword} variant="active" />;
        })}
      </div>
    </div>
  );
};

export const Solution: React.FC<SolutionType> = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <div className={`flex justify-between relative items-center ${props.isReversed ? "large:flex-row-reverse" : ""}`}>
        <div className="w-12 h-12 absolute -translate-x-1/2 top-[70%] left-1/2">
          <Waypoint onEnter={() => setShow(true)}></Waypoint>
        </div>
        <div className={`w-[600px] hidden large:block h-[600px]  relative translate-y-16 `}>
          {props.content.image && <Image {...props.content.image} width="500" className={`absolute w-full transition-all object-contain duration-700 h-full ${show ? "blur-3xl opacity-75 scale-105" : ""}`} />}
          <SlideInContainer show={show} direction={"bottom"}>
            {props.children}
          </SlideInContainer>
        </div>

        <div>
          <Content {...props.content} />
        </div>
      </div>
    </div>
  );
};

const SlideInContainer: React.FC<{
  children?: JSX.Element;
  show: Boolean;
  direction: "top" | "left" | "right" | "bottom";
}> = ({ children, show, direction }) => {
  return (
    <div
      className={`
        transition-all duration-700
        ${show ? "!opacity-100 !translate-x-0 !translate-y-0" : "opacity-0"}
        ${direction == "left" ? "-translate-x-28" : ""}
        ${direction == "right" ? "translate-x-28" : ""}
        ${direction == "top" ? "-translate-y-28" : ""}
        ${direction == "bottom" ? "translate-y-28" : ""}
      `}
    >
      {children}
    </div>
  );
};
