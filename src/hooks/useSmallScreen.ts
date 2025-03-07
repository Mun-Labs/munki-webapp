import { useState, useEffect } from "react";

const useSmallScreen = (px?: number): boolean => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const handleResize = () => {
    setIsSmallScreen(window?.innerWidth < (px ? px : 768));
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  return isSmallScreen;
};

export default useSmallScreen;
