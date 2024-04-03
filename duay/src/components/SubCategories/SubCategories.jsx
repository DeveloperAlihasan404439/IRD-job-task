"use client";
import Image from "next/image";
import useDuayTitle from "../Hooks/useDuayTitle";
import { useState } from "react";

function SubCategories({ duayTitle }) {
  const { subCategories } = useDuayTitle(duayTitle);
  const [opneTitel, setOpenTitle] = useState('');
  return (
    <div className="pl-5 py-3">
        <div className="border-l-[3px] border-dotted border-[#1EA55C]">
          {subCategories?.section?.map((subCategorie) => (
            <div
              key={subCategorie.section_id}
              className="relative pl-5 text-[#393939] dark:text-[#EEE] mb-3 cursor-pointer"
            >
              <div className="absolute top-3 -left-[5px] w-2 h-2 rounded-full bg-[#1EA55C]"></div>
              <h2
                className="text-lg pb-1"
                onClick={() => setOpenTitle(subCategorie.section_title)}
              >
                {subCategorie.section_title}
              </h2>
              {opneTitel ===subCategorie.section_title && (
                <>
                  {subCategorie.sub_title?.map((categorieDuay) => (
                    <div key={categorieDuay.sub_id}>
                      <div  className="flex gap-2 items-start">
                        <Image
                          width={20}
                          height={20}
                          alt="hello"
                          src="https://duaruqyah.com/assets/duaarrow.svg"
                        />
                        <a href={`#category${categorieDuay.sub_id}`} >{categorieDuay.duay_title}</a>
                      </div >
                    </div>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
    </div>
  );
}

export default SubCategories;
