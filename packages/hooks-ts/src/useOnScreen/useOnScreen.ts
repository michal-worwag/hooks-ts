import { useEffect, useState, type RefObject } from 'react';

/**
 * Custom hook: useOnScreen
 * Detects if an element is visible in the viewport.
 *
 * @param {RefObject<Element>} ref - A React ref pointing to the element to observe.
 * @param {string} rootMargin - Margin around the root. Can have values similar to CSS margin property.
 * @returns {boolean} - Returns `true` if the element is visible in the viewport, otherwise `false`.
 */
export function useOnScreen(
  ref: RefObject<Element | null>,
  rootMargin: string = '0px',
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current == null) return;
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry?.isIntersecting ?? false),
      { rootMargin },
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref, rootMargin]);

  return isVisible;
}
