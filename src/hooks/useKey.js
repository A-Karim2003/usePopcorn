import { useEffect } from "react";

export function useKey(eventType, key, callBack) {
  useEffect(() => {
    const handleEvent = (e) => e.key === key && callBack();

    document.addEventListener(eventType, handleEvent);

    return () => document.removeEventListener(eventType, handleEvent);
  }, []);
}
