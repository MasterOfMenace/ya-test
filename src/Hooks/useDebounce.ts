import { useEffect, useState } from "react";

export default function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
}
