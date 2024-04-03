"use client";
import { useEffect, useState } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    // Check if `document` is defined (only available in the browser)
    if (typeof document !== "undefined") {
      const html = document.documentElement;
      const currentMode = localStorage.getItem("mode") || "light";
      setMode(currentMode);
      html.classList.add(currentMode);
    }
  }, []);

  const changeHandler = () => {
    if (typeof document !== "undefined") {
      const html = document.documentElement;
      const newMode = mode === "light" ? "dark" : "light";
      html.classList.remove(mode);
      html.classList.add(newMode);
      setMode(newMode);
      localStorage.setItem("mode", newMode);
    }
  };

  return (
    <div className="rounded-[50%] w-fit mr-1">
      <input
        class="switch"
        type="checkbox"
        onChange={changeHandler}
        checked={mode === "dark"}
      ></input>
    </div>
  );
};

export default DarkMode;
