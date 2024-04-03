"use client";
import Image from "next/image";
import User from "../../assets/user.svg";
import unnamed from "../../assets/Icons/unnamed 1.png";
import Categories from "../Categories/Categories";
import { useState } from "react";
import useDuayTitle from "../Hooks/useDuayTitle";
import DuayDetelis from "../DuayDetelis/DuayDetelis";
import Setting from "../Setting/Setting";
import { FaArrowLeftLong } from "react-icons/fa6";
function Header() {
  const [duayTitle, setDuayTitle] = useState("Dua's Importance");
  const { subCategories } = useDuayTitle(duayTitle);
  return (
    <div>
      <div className="w-full flex justify-between items-center bg-[#f7f8fa] pr-10 sticky top-0 left-0 z-30 py-4 lg:py-0 dark:bg-[#0F172A]">
        <div className="flex gap-5 items-center">
          <div className="hidden md:block lg:hidden">
            <Image
              width={50}
              alt="unnamed"
              src={unnamed}
              className="rounded-full"
            />
          </div>
          <h1 className="ml-5 md:ml-0 text-2xl text-[#393939] font-semibold md:my-6 dark:text-[#EEE] flex gap-3 items-center">
           <span className="block md:hidden"><FaArrowLeftLong/></span>
            Dua Page
          </h1>
        </div>
        <div className="flex gap-4 items-center lg:flex-row-reverse">
          <Setting />
          <Image
            width={50}
            height={50}
            alt="user icons"
            src={User}
            className="rounded-full w-8 h-8 md:w-10 md:h-10"
          />
        </div>
      </div>
      <div className="lg:flex justify-between gap-4">
        <div className="lg:w-[30%] hidden lg:block lg:h-[82vh]">
          <Categories duayTitle={duayTitle} setDuayTitle={setDuayTitle} />
        </div>
        <div className="lg:h-[84vh] lg:overflow-y-scroll w-11/12 lg:w-[70%] mx-auto mt-2 ">
          <DuayDetelis subCategories={subCategories} duayTitle={duayTitle} setDuayTitle={setDuayTitle}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
