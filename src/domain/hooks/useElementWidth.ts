import { useState, useEffect, useRef } from "react";

export const useElementWidth = () => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries.length === 0) return;
      const entry = entries[0];
      setWidth(entry.contentRect.width);
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.unobserve(element);
    };
  }, []);

  return { width, elementRef };
};
