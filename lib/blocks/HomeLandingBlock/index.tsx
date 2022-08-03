import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../../components";
import { HomeLandingBlockProps } from "./types";

const HomeLandingBlock: React.FC<HomeLandingBlockProps> = (props) => {
  return (
    <Container>
      <div className="pt-44 medium:pt-96 medium:pb-[300px] relative">
        <div className="relative gap-5 medium:gap-7 flex flex-col items-center text-center">
          <Background />
          <h1 className="display-2 medium:display-1 drop-shadow-lg font-bold">
            {props.title}
          </h1>
          <p className="body-3 medium:text-[28px]  drop-shadow-lg max-w-[95%]">
            {props.subtitle}
          </p>
          <ScrollInicator />
        </div>
      </div>
    </Container>
  );
};

const Background = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 scale-x-150 w-[400px] -translate-y-[65%] h-[400px] medium:w-[800px] medium:h-[800px] medium:-translate-y-[52%]">
      <div className="w-full absolute opacity-60 h-full text-purple-navy-050 blur-2xl">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgb(64 201 162)" transform="translate(100 100)">
            <animate
              attributeName="d"
              dur="30s"
              repeatCount="indefinite"
              values="
      M40.2,-43.7C47.2,-33.1,44.8,-16.6,47.6,2.8C50.3,22.1,58.3,44.1,51.2,58.4C44.1,72.6,22.1,79,4,74.9C-14,70.9,-28,56.4,-35.8,42.2C-43.6,28,-45.3,14,-46.8,-1.5C-48.4,-17.1,-49.8,-34.2,-42,-44.8C-34.2,-55.4,-17.1,-59.6,-0.3,-59.3C16.6,-59.1,33.1,-54.4,40.2,-43.7Z;
      M34,-38.4C45,-23,55.5,-11.5,56.1,0.6C56.7,12.8,47.5,25.5,36.5,37.9C25.5,50.2,12.8,62.1,-4.4,66.5C-21.5,70.9,-42.9,67.6,-54,55.3C-65.1,42.9,-65.8,21.5,-63,2.8C-60.2,-15.9,-54,-31.9,-42.9,-47.3C-31.9,-62.7,-15.9,-77.6,-2.2,-75.4C11.5,-73.1,23,-53.8,34,-38.4Z;
      M45.1,-42.2C54.5,-35.7,55.5,-17.8,57.2,1.7C58.9,21.3,61.3,42.5,51.9,54.5C42.5,66.5,21.3,69.2,1.2,68C-18.8,66.8,-37.6,61.6,-47.6,49.6C-57.5,37.6,-58.7,18.8,-60.3,-1.6C-61.9,-22,-63.9,-44,-54,-50.5C-44,-57,-22,-48.1,-2.1,-46C17.8,-43.9,35.7,-48.7,45.1,-42.2Z;
      M35.4,-30.9C51.9,-18.9,75.4,-9.4,82.2,6.8C89,23.1,79.1,46.1,62.6,54.7C46.1,63.3,23.1,57.5,6.9,50.6C-9.3,43.8,-18.7,35.9,-30.7,27.3C-42.8,18.7,-57.7,9.3,-59.7,-2C-61.8,-13.4,-51,-26.9,-38.9,-38.9C-26.9,-50.9,-13.4,-61.6,-2,-59.6C9.4,-57.6,18.9,-42.9,35.4,-30.9Z;
      M52.5,-51.6C63.4,-41.5,64.7,-20.7,60,-4.6C55.4,11.4,44.8,22.9,33.9,29.6C22.9,36.4,11.4,38.5,-1.9,40.4C-15.2,42.3,-30.4,44,-43.9,37.2C-57.4,30.4,-69.2,15.2,-66.3,2.9C-63.5,-9.5,-46,-19,-32.5,-29.1C-19,-39.1,-9.5,-49.8,5.6,-55.4C20.7,-61.1,41.5,-61.6,52.5,-51.6Z;
      M35.4,-30.9C51.9,-18.9,75.4,-9.4,82.2,6.8C89,23.1,79.1,46.1,62.6,54.7C46.1,63.3,23.1,57.5,6.9,50.6C-9.3,43.8,-18.7,35.9,-30.7,27.3C-42.8,18.7,-57.7,9.3,-59.7,-2C-61.8,-13.4,-51,-26.9,-38.9,-38.9C-26.9,-50.9,-13.4,-61.6,-2,-59.6C9.4,-57.6,18.9,-42.9,35.4,-30.9Z;
      M40.2,-43.7C47.2,-33.1,44.8,-16.6,47.6,2.8C50.3,22.1,58.3,44.1,51.2,58.4C44.1,72.6,22.1,79,4,74.9C-14,70.9,-28,56.4,-35.8,42.2C-43.6,28,-45.3,14,-46.8,-1.5C-48.4,-17.1,-49.8,-34.2,-42,-44.8C-34.2,-55.4,-17.1,-59.6,-0.3,-59.3C16.6,-59.1,33.1,-54.4,40.2,-43.7Z;
      "
            />
          </path>
        </svg>
      </div>

      <div className="w-full absolute opacity-60 h-full text-purple-navy-050 blur-2xl">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#8A3FFC" transform="translate(100 100)">
            <animate
              attributeName="d"
              dur="30s"
              repeatCount="indefinite"
              values="
      M40.2,-43.7C47.2,-33.1,44.8,-16.6,47.6,2.8C50.3,22.1,58.3,44.1,51.2,58.4C44.1,72.6,22.1,79,4,74.9C-14,70.9,-28,56.4,-35.8,42.2C-43.6,28,-45.3,14,-46.8,-1.5C-48.4,-17.1,-49.8,-34.2,-42,-44.8C-34.2,-55.4,-17.1,-59.6,-0.3,-59.3C16.6,-59.1,33.1,-54.4,40.2,-43.7Z;
      M34,-38.4C45,-23,55.5,-11.5,56.1,0.6C56.7,12.8,47.5,25.5,36.5,37.9C25.5,50.2,12.8,62.1,-4.4,66.5C-21.5,70.9,-42.9,67.6,-54,55.3C-65.1,42.9,-65.8,21.5,-63,2.8C-60.2,-15.9,-54,-31.9,-42.9,-47.3C-31.9,-62.7,-15.9,-77.6,-2.2,-75.4C11.5,-73.1,23,-53.8,34,-38.4Z;
      M45.1,-42.2C54.5,-35.7,55.5,-17.8,57.2,1.7C58.9,21.3,61.3,42.5,51.9,54.5C42.5,66.5,21.3,69.2,1.2,68C-18.8,66.8,-37.6,61.6,-47.6,49.6C-57.5,37.6,-58.7,18.8,-60.3,-1.6C-61.9,-22,-63.9,-44,-54,-50.5C-44,-57,-22,-48.1,-2.1,-46C17.8,-43.9,35.7,-48.7,45.1,-42.2Z;
      M35.4,-30.9C51.9,-18.9,75.4,-9.4,82.2,6.8C89,23.1,79.1,46.1,62.6,54.7C46.1,63.3,23.1,57.5,6.9,50.6C-9.3,43.8,-18.7,35.9,-30.7,27.3C-42.8,18.7,-57.7,9.3,-59.7,-2C-61.8,-13.4,-51,-26.9,-38.9,-38.9C-26.9,-50.9,-13.4,-61.6,-2,-59.6C9.4,-57.6,18.9,-42.9,35.4,-30.9Z;
      M52.5,-51.6C63.4,-41.5,64.7,-20.7,60,-4.6C55.4,11.4,44.8,22.9,33.9,29.6C22.9,36.4,11.4,38.5,-1.9,40.4C-15.2,42.3,-30.4,44,-43.9,37.2C-57.4,30.4,-69.2,15.2,-66.3,2.9C-63.5,-9.5,-46,-19,-32.5,-29.1C-19,-39.1,-9.5,-49.8,5.6,-55.4C20.7,-61.1,41.5,-61.6,52.5,-51.6Z;
      M35.4,-30.9C51.9,-18.9,75.4,-9.4,82.2,6.8C89,23.1,79.1,46.1,62.6,54.7C46.1,63.3,23.1,57.5,6.9,50.6C-9.3,43.8,-18.7,35.9,-30.7,27.3C-42.8,18.7,-57.7,9.3,-59.7,-2C-61.8,-13.4,-51,-26.9,-38.9,-38.9C-26.9,-50.9,-13.4,-61.6,-2,-59.6C9.4,-57.6,18.9,-42.9,35.4,-30.9Z;
      M40.2,-43.7C47.2,-33.1,44.8,-16.6,47.6,2.8C50.3,22.1,58.3,44.1,51.2,58.4C44.1,72.6,22.1,79,4,74.9C-14,70.9,-28,56.4,-35.8,42.2C-43.6,28,-45.3,14,-46.8,-1.5C-48.4,-17.1,-49.8,-34.2,-42,-44.8C-34.2,-55.4,-17.1,-59.6,-0.3,-59.3C16.6,-59.1,33.1,-54.4,40.2,-43.7Z;
      "
            />
          </path>
        </svg>
      </div>
    </div>
  );
};

const ScrollInicator = () => {
  return (
    <div className="w-12 h-12 rounded-full animate-bounce mt-3    medium:mt-12 grid place-items-center">
      <FontAwesomeIcon className="text-white text-[25px]" icon={"arrow-down"} />
    </div>
  );
};

export default HomeLandingBlock;
