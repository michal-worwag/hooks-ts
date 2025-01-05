# useOnScreen

The `useOnScreen` hook is a custom React hook designed to detect when a specific element becomes visible within the viewport.

## Usage

```tsx
import { useRef } from 'react';
import { useOnScreen } from 'hooks-ts';

export default function UseOnScreenExample() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-50px');

  return (
    <div>
      <div style={{ height: '200vh' }}>Scroll down to see the element</div>
      <div
        ref={ref}
        style={{
          height: '100px',
          background: isVisible ? 'green' : 'red',
        }}
      >
        {isVisible ? 'Visible' : 'Not Visible'}
      </div>
    </div>
  );
}
```

### Returns

`isVisible: boolean` - Returns `true` if the element is visible in the viewport, otherwise `false`

## Hook

```ts
import { useEffect, useState, type RefObject } from 'react';

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
```
