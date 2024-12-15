# useHover

The `useHover` hook tracks whether a referenced DOM element is currently being hovered over. It listens for `mouseenter` and `mouseleave` events on the element and updates its hover state accordingly.

## Usage

```tsx
import { useRef } from 'react';
import { useHover } from 'hooks-ts';

export default function UseHoverExample() {
  const divRef = useRef<HTMLDivElement>(null);
  const isHovered = useHover(divRef);

  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: isHovered ? 'lightblue' : 'lightgray',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s',
        }}
      >
        {isHovered ? 'Hovered!' : 'Hover over me'}
      </div>
    </div>
  );
}
```

### Returns

`isHovered`: `boolean` - A boolean value that is `true` when the referenced element is hovered over and `false` otherwise.

## Hook

```ts
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
```
