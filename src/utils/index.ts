import { RefObject, useEffect, useState } from "react";

export const useInViewport = (
  ref: RefObject<HTMLDivElement | HTMLImageElement>,
  rootMargin: string
) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref && ref.current) {
        observer.unobserve(ref?.current);
      }
    };
  }, []);
  return isIntersecting;
};
