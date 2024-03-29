import React from "react";
export interface ImagePickerType {}

export const ImagePicker: React.FC<ImagePickerType> = (props) => {
  return (
    <div className="h-[140px] w-[220px] rounded-lg bg-neutral-400 p-4  shadow-m">
      <div className="special-border relative  grid h-full w-full  place-items-center ">
        <div className="body-3 relative flex items-center gap-3 font-bold text-black">
          <ImageIcon />
          <p className="body-3 bold">upload image</p>
        </div>
      </div>
    </div>
  );
};

const ImageIcon: React.FC = () => {
  return (
    <svg
      width="15"
      height="13"
      viewBox="0 0 15 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2227 0.625H2.72266C1.76562 0.625 0.972656 1.41797 0.972656 2.375V11.125C0.972656 12.1094 1.76562 12.875 2.72266 12.875H13.2227C14.1797 12.875 14.9727 12.1094 14.9727 11.125V2.375C14.9727 1.41797 14.207 0.625 13.2227 0.625ZM4.03516 2.375C4.74609 2.375 5.34766 2.97656 5.34766 3.6875C5.34766 4.42578 4.77344 5 4.03516 5C3.26953 5 2.72266 4.42578 2.72266 3.6875C2.72266 2.97656 3.32422 2.375 4.03516 2.375ZM13.1953 10.9062C13.1133 11.043 12.9492 11.125 12.8125 11.125H3.24219C3.05078 11.125 2.91406 11.043 2.83203 10.9062C2.77734 10.7422 2.77734 10.5781 2.88672 10.4414L4.80078 7.81641C4.88281 7.70703 4.99219 7.625 5.15625 7.625C5.29297 7.625 5.40234 7.70703 5.48438 7.81641L6.38672 9.04688L8.92969 5.21875C9.01172 5.08203 9.14844 5 9.3125 5C9.44922 5 9.58594 5.08203 9.66797 5.21875L13.168 10.4688C13.25 10.5781 13.25 10.7695 13.1953 10.9062Z"
        fill="currentColor"
      />
    </svg>
  );
};
