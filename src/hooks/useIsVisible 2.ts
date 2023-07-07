import { RefObject } from 'preact';
import { useState, useEffect } from 'react';

export const useIsVisible = (ref: React.RefObject<HTMLDivElement>) => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if(!entry) return
      setIsVisible(entry.isIntersecting)
     }
    )
    if(!ref.current) return
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isVisible
};
