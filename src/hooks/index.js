import { useEffect, useRef, useState } from "react"


export const useIntersectionObserver = (options) => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const callback = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }


  useEffect(() => {
    let currentEl;

    const observer = new IntersectionObserver(callback, options);

    if (containerRef && containerRef.current) {
      currentEl = containerRef.current;
      observer.observe(currentEl);
    }

    return () => {
      if (containerRef && containerRef.current) {
        currentEl = containerRef.current;
        observer.unobserve(currentEl);
      }
    }
  }, [containerRef, options])

  return [containerRef, isVisible]
}