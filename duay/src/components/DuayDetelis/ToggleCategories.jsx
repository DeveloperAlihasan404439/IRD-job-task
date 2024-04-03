import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import SubCategories from "../SubCategories/SubCategories";
import useCategories from "../Hooks/useCategories";
function ToggleCategories({ duayTitle, setDuayTitle }) {
  const { categories } = useCategories();
  return (
    <div className="drawer w-fit">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-fit">
        <label htmlFor="my-drawer" className="drawer-button text-2xl w-fit">
          <MdOutlineMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 md:w-[60%] min-h-full bg-[#f7f8fa] dark:bg-[#0F172A] mt-20">
          <div className="h-screen overflow-y-scroll sticky top-0 left-0">
            {categories?.map((category) => (
              <div key={category._id} className="">
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
        </ul>
      </div>
    </div>
  );
}

export default ToggleCategories;
