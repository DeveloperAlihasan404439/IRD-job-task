import Image from "next/image";

function Language({ activeChange }) {
  return (
    <div class="border-x-devider border-x-1 border-b-1 rounded-lg bg-[#FFF] dark:bg-[#15213b]">
      <div class="cursor-pointer ">
        <div class="flex flex-row w-full  ">
          {activeChange === "Language" && (
            <div class="bg-[#1EA55C] w-1 rounded-tl-lg rounded-bl-lg"></div>
          )}
          <div class="p-2 flex flex-row items-center w-full bg-[#eaebeec7] dark:bg-[#192847]">
            <div class="bg-[#FFF] flex p-2 items-center rounded-full mr-5 justify-center dark:bg-[#15213b] ">
              <svg
                viewBox="0 0 64.00 64.00"
                xmlns="http://www.w3.org/2000/svg"
                stroke={activeChange === "Language" ? "#1EA55C" : "#393939"}
                fill="none"
                transform="rotate(0)"
                width="30"
                height="30"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="10"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.384"
                >
                  <path
                    d="M34.53,14.59s-1.6,18.21-24,32.78"
                    strokeLinecap="round"
                  ></path>
                  <line
                    x1="17.35"
                    y1="14.59"
                    x2="41.46"
                    y2="14.59"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="24.4"
                    y1="9.08"
                    x2="24.4"
                    y2="14.59"
                    strokeLinecap="round"
                  ></line>
                  <path
                    d="M16.76,22.05S25.2,36.8,32,41.33"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M33.55,54.92l10.74-25a.89.89,0,0,1,1.63,0l10.73,25"
                    strokeLinecap="round"
                  ></path>
                  <line
                    x1="37.25"
                    y1="46.3"
                    x2="52.96"
                    y2="46.3"
                    strokeLinecap="round"
                  ></line>
                </g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M34.53,14.59s-1.6,18.21-24,32.78"
                    strokeLinecap="round"
                  ></path>
                  <line
                    x1="7.35"
                    y1="14.59"
                    x2="41.46"
                    y2="14.59"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="24.4"
                    y1="9.08"
                    x2="24.4"
                    y2="14.59"
                    strokeLinecap="round"
                  ></line>
                  <path
                    d="M16.76,22.05S25.2,36.8,32,41.33"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M33.55,54.92l10.74-25a.89.89,0,0,1,1.63,0l10.73,25"
                    strokeLinecap="round"
                  ></path>
                  <line
                    x1="37.25"
                    y1="46.3"
                    x2="52.96"
                    y2="46.3"
                    strokeLinecap="round"
                  ></line>
                </g>
              </svg>
            </div>
            <p
              class={`${
                activeChange === "Language"
                  ? "text-[#1EA55C]"
                  : "text-[#393939] dark:text-[#EEE]"
              }  font-medium  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush`}
            >
              Language Settings
            </p>
          </div>
        </div>
      </div>
      {activeChange === "Language" && (
        <div class="py-6 rounded-b-lg">
          <div class="flex flex-row gap-x-3 mx-4 justify-center">
            <button class="bg-[#1EA55C] text-[#FFF] rounded-md w-full md:w-29 h-10 text-ms">
              English
            </button>
            <button class=" text-[#393939] dark:text-[#EEE] border border-solid border-[#cccdcf]  rounded-md w-full md:w-29 h-10 text-ms dark:bg-[#192847]">
              বাংলা
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Language;
