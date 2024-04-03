import Image from "next/image";

import general from "../../assets/Icons/general.svg";

function General({ activeChange }) {
  return (
    <div class="border-x-devider border-x-1 border-b-1 rounded-lg bg-[#FFF] dark:bg-[#15213b] ">
      <div class="cursor-pointer ">
        <div class="flex flex-row w-full  ">
          {activeChange === "General" && (
            <div class="bg-[#1EA55C] w-1 rounded-tl-lg rounded-bl-lg"></div>
          )}
          <div class="p-2 flex flex-row items-center w-full bg-[#eaebeec7] dark:bg-[#192847]">
            <div class="bg-[#FFF] flex p-2 items-center rounded-full mr-5 justify-center dark:bg-[#15213b] ">
              <svg
                width="30"
                height="30"
                viewBox="-2.4 -2.4 28.80 28.80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke={activeChange === "General" ? "#1EA55C" : "#393939"}
                transform="rotate(0)"
              >
                <path d="M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7" />
                <path d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5" />
                <path d="M14.5812 13.6159C15.1396 13.9621 15.1396 14.8582 14.5812 15.2044L11.2096 17.2945C10.6669 17.6309 10 17.1931 10 16.5003L10 12.32C10 11.6273 10.6669 11.1894 11.2096 11.5258L14.5812 13.6159Z" />
                <path d="M2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.2855 9.04765 22.0625 10.6294 21.6165 13.793L21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793Z" />
              </svg>
            </div>
            <p
              class={`${
                activeChange === "General"
                  ? "text-[#1EA55C]"
                  : "text-[#393939] dark:text-[#EEE]"
              }  font-medium  text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush`}
            >
              General Settings
            </p>
          </div>
        </div>
      </div>
      {activeChange === "General" && (
        <div>
          <div class="flex flex-col gap-y-1 py-2 px-4 rounded-b-lg">
            <div class="flex-row gap-x-3 flex text-sm py-1 justify-between cursor-pointer">
              <p class="text-title text-sm text-[#393939] dark:text-[#EEE]">
                Show Arabic
              </p>
              <div>
                <div class="w-5 h-5 flex items-center justify-center rounded-md bg-[#1EA55C] transition duration-150 delay-75">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7L5 11L15 1"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex-row gap-x-3 flex text-sm py-1 justify-between text-title  cursor-pointer">
              <p class="text-title text-sm text-[#393939] dark:text-[#EEE] ">
                Show Translation
              </p>
              <div>
                <div class="w-5 h-5 flex items-center justify-center rounded-md bg-[#1EA55C] transition duration-150 delay-75">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7L5 11L15 1"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex-row gap-x-3 flex text-sm py-1 justify-between text-title  cursor-pointer">
              <p class="text-title text-sm text-[#393939] dark:text-[#EEE]">
                Show Transliteration
              </p>
              <div>
                <div class="w-5 h-5 flex items-center justify-center rounded-md bg-[#1EA55C] transition duration-150 delay-75">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7L5 11L15 1"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex-row gap-x-3 flex text-sm py-1 justify-between text-title  cursor-pointer">
              <p class="text-title text-sm text-[#393939] dark:text-[#EEE]">
                Show Refference
              </p>
              <div>
                <div class="w-5 h-5 flex items-center justify-center rounded-md bg-[#1EA55C] transition duration-150 delay-75">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7L5 11L15 1"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default General;
