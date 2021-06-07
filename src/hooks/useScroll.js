import { useState, useEffect } from "react";

export default function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  const listener = e => {
    setScrollY(window.pageYOffset * window.screen.width / window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener, { passive: true});
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return scrollY;
}