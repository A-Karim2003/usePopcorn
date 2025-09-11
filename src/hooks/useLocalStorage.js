import { useState, useEffect } from "react";

export function useLocalStorage(key) {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem(key)) || []
  );

  //* useEffect for adding/removing movie objects
  useEffect(
    () => localStorage.setItem(key, JSON.stringify(value)),
    [value, key]
  );

  return [value, setValue];
}
