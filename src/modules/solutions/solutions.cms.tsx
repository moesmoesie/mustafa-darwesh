import { useState } from "react";
import { Floating, Editor, ImagePicker, Popover } from "../../components";
import { Solution, SolutionType } from "./solutions.content";
import { colorOptions } from "./solutions.data";

export const SolutionCMS: React.FC<SolutionType> = (props) => {
  const [color, setColor] = useState("small");
  return (
    <Solution content={props.content} isReversed={props.isReversed}>
      <div className=" items-center flex  flex-col pt-24">
        <Floating delay={0.5}>
          <Editor
            initialValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor blandit diam.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor blandit diam."
          />
        </Floating>
        <div className="flex">
          <Floating>
            <div className=" -translate-y-10">
              <ImagePicker />
            </div>
          </Floating>

          <Floating delay={0.8}>
            <div className="translate-x-10 -translate-y-16">
              <Popover setOption={(name) => setColor(name)} currentOptionIndex={colorOptions.findIndex((el) => el.value === color)} options={colorOptions} />
            </div>
          </Floating>
        </div>
      </div>
    </Solution>
  );
};