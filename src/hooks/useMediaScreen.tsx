import { useState, useEffect } from "react";

const useMediaScreen = (breakpoint: number = 768): boolean => {
  const [isCustomScreen, setIsCustomScreen] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia(
      `(max-width: ${breakpoint}px)`
    );

    const handleScreenChange = (event: MediaQueryListEvent): void => {
      setIsCustomScreen(event.matches);
    };

    setIsCustomScreen(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, [breakpoint]);

  return isCustomScreen;
};

export default useMediaScreen;
