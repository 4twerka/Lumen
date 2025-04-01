import { useEffect, useState, useRef } from "react";

interface IntersectionObserverOptions {
  threshold?: number;
}

const useIntersectionObserver = (options: IntersectionObserverOptions = {}) => {
  const { threshold = 0.01 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

export default useIntersectionObserver;
