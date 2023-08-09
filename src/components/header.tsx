const Header: React.FC = () => {
  return (
    <div className="flex bg-white ">
      <div className="border-b w-full pt-12 flex justify-between items-center pb-20">
        <Logo />
        <HamburgerButton />
      </div>
    </div>
  );
};

export default Header;

const HamburgerButton: React.FC = () => {
  return (
    <button className="flex flex-col gap-1">
      <div className="w-4 h-0.5 bg-[#2209B8]" />
      <div className="w-4 h-0.5 bg-[#2209B8]" />
    </button>
  );
};

const Logo: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="135" height="17" viewBox="0 0 135 17" fill="none">
      <path d="M11.9724 0.42627H15.3394L9.31671 16.3105H5.97482L0 0.42627H3.41484L6.7818 10.1465C7.04167 10.9762 7.51583 12.2802 7.70732 13.0621H7.75519C7.94439 12.303 8.39575 10.999 8.7035 10.1465L11.9724 0.42627Z" fill="#2209B8" />
      <path
        d="M17.1175 0C18.1843 0 18.8728 0.759106 18.8728 1.70742C18.8728 2.65573 18.1843 3.41484 17.1175 3.41484C16.0506 3.41484 15.3622 2.65573 15.3622 1.70742C15.3622 0.759106 16.0506 0 17.1175 0ZM15.5765 16.3105V4.55235H18.6813V16.3128H15.5765V16.3105Z"
        fill="#2209B8"
      />
      <path d="M23.3521 16.3104H20.2473V4.55225H27.5261L27.542 7.20798H23.3704L23.3544 16.3127L23.3521 16.3104Z" fill="#2209B8" />
      <path d="M27.5056 7.192H24.9935V4.55223H27.5056V1.47021H30.6105V4.55223H33.5033V7.01875H30.6105V13.5635H33.3141V16.3127H27.5056V7.192Z" fill="#2209B8" />
      <path d="M41.7782 4.55225H44.883V16.3127H34.4265V4.55225H37.5313V13.6091H41.7759V4.55225H41.7782Z" fill="#2209B8" />
      <path
        d="M47.019 7.80097V5.09737C47.5889 4.71896 49.2941 4.21973 50.9308 4.21973C53.9422 4.21973 55.9573 5.71286 55.9573 8.46434V16.313H53.0167V15.4125C52.4718 16.0052 51.2614 16.6458 49.7454 16.6458C47.6596 16.6458 45.6672 15.3647 45.6672 12.8047C45.6672 10.2447 47.9423 8.82223 50.7872 8.82223C51.5212 8.82223 52.3761 8.98864 52.8502 9.17785V8.72649C52.8502 7.65964 52.2097 6.82986 50.4316 6.82986C49.0091 6.82986 47.8009 7.32682 47.2538 7.80097H47.0168H47.019ZM48.7014 12.6839C48.7014 13.7028 49.5312 14.2249 50.5023 14.2249C51.5691 14.2249 52.4468 13.7279 52.8502 13.2766V11.2614C52.5653 11.1429 52.0205 11.0015 51.1907 11.0015C49.6018 11.0015 48.7014 11.6649 48.7014 12.6839Z"
        fill="#2209B8"
      />
      <path d="M57.4026 16.3105V0.42627H60.5074V16.3105H57.4026Z" fill="#2209B8" />
      <path d="M77.602 0.42627V3.17546H69.8719V6.5903H77.0321V9.3167H69.8719V16.3105H66.7192V0.42627H77.602Z" fill="#2209B8" />
      <path d="M81.181 16.3104H78.0762V4.55225H85.3549V7.20798H81.1833V16.3127L81.181 16.3104Z" fill="#2209B8" />
      <path
        d="M87.345 0C88.4119 0 89.1003 0.759106 89.1003 1.70742C89.1003 2.65573 88.4119 3.41484 87.345 3.41484C86.2782 3.41484 85.5897 2.65573 85.5897 1.70742C85.5897 0.759106 86.2782 0 87.345 0ZM85.804 16.3105V4.55235H88.9088V16.3128H85.804V16.3105Z"
        fill="#2209B8"
      />
      <path
        d="M89.7386 10.4088C89.7386 6.90053 92.4171 4.21973 95.9026 4.21973C98.0842 4.21973 99.7916 5.12017 100.548 5.76073V11.6398H92.7477C93.0326 13.1808 94.4551 14.0334 96.3517 14.0334C97.9406 14.0334 99.126 13.5592 100.049 12.8708H100.286V15.5744C99.4087 16.1443 98.0569 16.6412 96.0668 16.6412C92.4399 16.6412 89.7363 14.2226 89.7363 10.4066L89.7386 10.4088ZM92.7249 9.34198H97.9178V7.13761C97.6329 6.9484 96.851 6.71133 96.1169 6.71133C94.3867 6.71133 92.987 7.70751 92.7272 9.34198H92.7249Z"
        fill="#2209B8"
      />
      <path d="M104.77 16.3104H101.665V4.55225H112.263V16.3127H109.158V7.25585H104.772V16.3127L104.77 16.3104Z" fill="#2209B8" />
      <path
        d="M122.221 5.19291V0.42627H125.325V16.3105H122.576V15.2436C121.936 16.0255 120.632 16.6433 119.043 16.6433C115.701 16.6433 113.068 14.1312 113.068 10.4314C113.068 6.73163 115.747 4.21952 119.066 4.21952C120.322 4.21952 121.58 4.69367 122.218 5.19063L122.221 5.19291ZM116.198 10.4314C116.198 12.5423 117.598 13.9397 119.565 13.9397C120.773 13.9397 121.746 13.4656 122.221 12.9207V7.87143C121.769 7.37448 120.702 6.92312 119.59 6.92312C117.693 6.92312 116.2 8.29772 116.2 10.4314H116.198Z"
        fill="#2209B8"
      />
      <path
        d="M133.79 7.7049C133.245 7.25354 132.082 6.80446 130.874 6.80446C129.83 6.80446 129.31 7.11221 129.31 7.7049C129.31 8.36827 130.188 8.65321 130.899 8.91309L132.369 9.48299C133.792 10.0529 135 10.8827 135 13.0164C135 15.1501 133.126 16.6432 130.281 16.6432C128.763 16.6432 127.247 16.1918 126.488 15.7428V13.0164H126.725C127.436 13.5863 128.955 14.0832 130.044 14.0832C131.348 14.0832 132.082 13.7276 132.082 12.9685C132.082 12.3279 131.656 11.9974 130.589 11.5939L129.214 11.0719C128.1 10.6456 126.417 9.81581 126.417 7.61144C126.417 5.78548 128.125 4.22168 130.685 4.22168C132.226 4.22168 133.482 4.74371 134.029 5.09932V7.70718H133.792L133.79 7.7049Z"
        fill="#2209B8"
      />
    </svg>
  );
};
