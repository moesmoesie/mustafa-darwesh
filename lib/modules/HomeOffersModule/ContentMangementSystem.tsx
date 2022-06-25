import { UploadImageCard } from "../../components";
import { Picker } from "../../components";
import { Button } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextEditor } from "../../components";

const ContentMangementSystem: React.FC = () => {
  return (
    <div className=" grid gap-6 grid-cols-[min-content,min-content]">
      <div className="translate-x-6">
        <div className="w-[350px] h-[200px]">
          <TextEditor />
        </div>
      </div>
      <div className="z-10 -translate-x-8 mt-24">
        <Button type="accent">
          <span className="px-6 py-2 flex items-center font-bold gap-2 body-1">
            <FontAwesomeIcon className="text-Teal/500 body-2" icon="plus" />
            Deploy
          </span>
        </Button>
      </div>
      <div className="translate-x-10">
        <UploadImageCard />
      </div>
      <div className="-translate-x-16">
        <Picker />
      </div>
    </div>
  );
};

export default ContentMangementSystem;