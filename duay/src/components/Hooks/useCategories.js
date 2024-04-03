"use client";
import { useEffect, useState } from "react";

function useCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://duay-server-task.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);
  return { categories, isLoading };
}

export default useCategories;
