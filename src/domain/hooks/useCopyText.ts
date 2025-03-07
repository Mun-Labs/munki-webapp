import { useEffect, useRef, useState } from "react";
import { useCopyToClipboard } from "react-use";

export function useCopyText() {
  const [isCopy, setIsCopy] = useState(false);
  const [{ value }, copy] = useCopyToClipboard();

  const timeoutRef = useRef<any | null>(null);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current!);
  }, []);

  const resetCopyState = (delay = 1000) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsCopy(false);
    }, delay);
  };

  const onCopyText = (value: string) => {
    setIsCopy(true);
    copy(value);
    resetCopyState(4000);
  };

  return { value, isCopy, onCopyText };
}
