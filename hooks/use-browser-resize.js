import React, { useState, useEffect } from "react";
export const useBrowserResize = () => {
  const [is_mobile, setMobile] = useState(false);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (!(typeof window !== "undefined")) return false;
    const handleResize = () => setWidth(window.innerWidth);
    handleResizeWindow();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      handleResizeWindow();
    };
  });

  const handleResizeWindow = () => {
    setMobile(typeof window !== "undefined" ? !!(width <= 992) : false);
  };

  return [is_mobile];
};
