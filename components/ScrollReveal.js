import { useEffect, useRef, useState } from 'react';
import { cn } from "../lib/utils";

const ScrollReveal = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 20,
  duration = 800,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Calculate transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return `translateY(${distance}px)`;
      case 'down': return `translateY(-${distance}px)`;
      case 'left': return `translateX(${distance}px)`;
      case 'right': return `translateX(-${distance}px)`;
      case 'none': return 'none';
      default: return `translateY(${distance}px)`;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element enters the viewport
        if (entry.isIntersecting) {
          // Add a small delay before showing the element
          setTimeout(() => {
            setIsVisible(true);
            // Unobserve after it's been revealed if once is true
            if (once && ref.current) observer.unobserve(ref.current);
          }, delay);
        } else if (!once) {
          // If not once, hide the element when it leaves the viewport
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15, // Trigger when at least 15% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay, once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getInitialTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.33, 1, 0.68, 1), transform ${duration}ms cubic-bezier(0.33, 1, 0.68, 1)`,
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal; 