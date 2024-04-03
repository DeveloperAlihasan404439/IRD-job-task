"use client";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import SubCategories from "../SubCategories/SubCategories";
import useCategories from "../Hooks/useCategories";
function Categories({ duayTitle, setDuayTitle }) {
  const { categories } = useCategories();
  const [searchCategory, setSearchCategory] = useState("");

  //------------ search categories duay start code ----------------
  function brandSearch(categories, searchCategory) {
    let searchAllCategories = categories;
    if (searchCategory) {
      searchAllCategories = searchAllCategories.filter(
        ({ categories_title }) =>
          categories_title &&
          categories_title.toLowerCase().includes(searchCategory.toLowerCase())
      );
    }
    return searchAllCategories;
  }
  const searchAllCategories = brandSearch(categories, searchCategory);
  return (
      <div
        className={`rounded-t-xl bg-white dark:bg-[#15213b]`}
      >
        <h1 className=" text-xl bg-[#1EA55C] text-[#FFFFFF] py-5 text-center rounded-t-xl">
          Categories
        </h1>
        <div className="p-5">
          <label className="relative block w-full mb-5">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-xl text-[#393939]">
              <FaSearch />
            </span>
            <input
              className="h-12 placeholder:text-mute-grey placeholder:text-sm border-[1px] bg-white w-full rounded-md pl-12 focus:outline-none focus:border-[#1EA55C] sm:text-sm dark:bg-[#1b2b4d] dark:border-none dark:text-[#EEE]"
              placeholder="Search Categories"
              type="text"
              name="search"
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
            />
          </label>
          <div className=" h-[62vh] overflow-y-scroll">
            {searchAllCategories?.map((category) => (
              <div key={category._id}>
                <div
                  onClick={() => setDuayTitle(category.categories_title)}
                  className={`flex gap-3 items-center p-1 rounded cursor-pointer transition duration-300 ease-in-out
                     ${
                       duayTitle === category.categories_title
                         ? "bg-[#e8f0f5] dark:bg-[#1b2b4d]"
                         : "hover:bg-[#e8f0f5] dark:hover:bg-[#192847]"
                     } mr-5`}
                >
                  <Image
                    width={20}
                    height={20}
                    src={category.logo_ur}
                    alt={category.categories_title}
                    className="bg-[#d0d2d6] dark:bg-[#20335c] w-fit h-full p-2 rounded-full"
                  />
                  <h1 className="text-[#393939] text-xl font-medium dark:text-[#EEE]">
                    {category.categories_title}
                  </h1>
                </div>
                {duayTitle === category.categories_title && (
                  <SubCategories duayTitle={duayTitle} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default Categories;
