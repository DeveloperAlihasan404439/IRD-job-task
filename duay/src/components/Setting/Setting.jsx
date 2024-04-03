"use client";
import { IoSettings } from "react-icons/io5";
import { useState } from "react";
import Language from "./Language";
import General from "./General";
import Font from "./Font";
import Appearance from "./Appearance";
function Setting() {
  const [activeChange, setActiveChange] = useState("Language");

  function hendelActiveChange(text) {
    if (text === "General") {
      return setActiveChange("General");
    } else if (text === "Font") {
      return setActiveChange("Font");
    } else if (text === "Appearance") {
      return setActiveChange("Appearance");
    }
    return setActiveChange("Language");
  }
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="drawer-button text-2xl text-[#1EA55C]"
        >
          <IoSettings />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#f7f8fa] dark:bg-[#0F172A] rounded-l-xl">
          <h2 className="py-6 text-center text-xl text-[#393939] dark:text-[#EEE]">Settings</h2>

          <div class="my-2" onClick={()=>hendelActiveChange('Language')}>
            <Language activeChange={activeChange}/>
          </div>
          <div class="my-2" onClick={()=>hendelActiveChange('General')}>
            <General activeChange={activeChange}/>
          </div>
          <div class="my-2" onClick={()=>hendelActiveChange('Font')}>
            <Font activeChange={activeChange}/>
          </div>
          <div class="my-2" onClick={()=>hendelActiveChange('Appearance')}>
            <Appearance activeChange={activeChange}/>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Setting;
