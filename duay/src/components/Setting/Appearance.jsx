import Image from "next/image";

import font from "../../assets/Icons/font.svg";

import DarkMode from "../DarkMode/DarkMode";
const Appearance = ({ activeChange }) => {
  return (
    <div class="border-x-devider border-x-1 border-b-1 rounded-lg bg-[#FFF] dark:bg-[#15213b]">
      <div class="cursor-pointer ">
        <div class="flex flex-row w-full">
          {activeChange === "Appearance" && (
            <div class="bg-[#1EA55C] w-1 rounded-tl-lg rounded-bl-lg"></div>
          )}
          <div class="p-2 flex flex-row items-center w-full bg-[#eaebeec7] dark:bg-[#192847]">
            <div class="bg-[#FFF] flex p-2 items-center rounded-full mr-5 justify-center dark:bg-[#15213b] ">
            <svg
                viewBox="0 0 25.00 25.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke={activeChange === "Appearance" ? "#1EA55C" : "#393939"}
                width="30"
                height="30"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M19 3.32001H16C14.8954 3.32001 14 4.21544 14 5.32001V8.32001C14 9.42458 14.8954 10.32 16 10.32H19C20.1046 10.32 21 9.42458 21 8.32001V5.32001C21 4.21544 20.1046 3.32001 19 3.32001Z"
                    strokeWidth="1.85"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M8 3.32001H5C3.89543 3.32001 3 4.21544 3 5.32001V8.32001C3 9.42458 3.89543 10.32 5 10.32H8C9.10457 10.32 10 9.42458 10 8.32001V5.32001C10 4.21544 9.10457 3.32001 8 3.32001Z"
                    strokeWidth="1.85"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M19 14.32H16C14.8954 14.32 14 15.2154 14 16.32V19.32C14 20.4246 14.8954 21.32 16 21.32H19C20.1046 21.32 21 20.4246 21 19.32V16.32C21 15.2154 20.1046 14.32 19 14.32Z"
                    strokeWidth="1.85"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M8 14.32H5C3.89543 14.32 3 15.2154 3 16.32V19.32C3 20.4246 3.89543 21.32 5 21.32H8C9.10457 21.32 10 20.4246 10 19.32V16.32C10 15.2154 9.10457 14.32 8 14.32Z"
                    strokeWidth="1.85"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <p class={`${activeChange === "Appearance"?'text-[#1EA55C]':'text-[#393939] dark:text-[#EEE]'}  font-medium  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush`}>
              Appearance Settings
            </p>
          </div>
        </div>
      </div>
      {activeChange ==="Appearance" && (
        <div class="px-4 pb-1 rounded-b-lg">
          <div class=" flex flex-row justify-between items-center">
            <p class="mt-7 mb-4 text-title text-sm dark:text-dark-text text-[#393939] dark:text-[#EEE]">
              Night Mode
            </p>
            <DarkMode />
          </div>
        </div>
      )}
    </div>
  );
};

export default Appearance;
