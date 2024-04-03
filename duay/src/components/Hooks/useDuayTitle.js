"use client";
import { useEffect, useState } from "react";

function useDuayTitle(duayTitle) {
  
  const [isLoading, setLoading] = useState(true);
  const [subCategories=[], setSubCategories] = useState(null);
  useEffect(() => {
    if (duayTitle) {
      fetch(`https://duay-server-task.vercel.app/duay/title?duay=${duayTitle}`)
        .then((res) => res.json())
        .then((data) => {
          setSubCategories(data);
          setLoading(false);
        });
    }
  }, [duayTitle]);
  return { subCategories, isLoading };
}

export default useDuayTitle;
