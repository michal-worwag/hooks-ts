import { useState, useEffect } from 'react';

export function useHover<T extends HTMLElement>(
  elementRef: React.RefObject<T>,
): boolean {
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    // Event handlers
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Attach event listeners
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup event listeners on unmount or ref change
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [elementRef]);

  return isHovered;
}
