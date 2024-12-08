# useMediaQuery

The `useMediaQuery` hook allows you to track the state of a CSS media query, returning a boolean that indicates whether the media query matches the current device or viewport characteristics. It is useful for responsive design and handling different screen sizes or features dynamically.

## Usage

```tsx
import { useMediaQuery } from 'hooks-ts';

export default function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div>
      <p>isMobile: {isMobile ? 'Yes' : 'No'}</p>
    </div>
  );
}
```

### Returns

`matches: boolean` - A boolean value indicating whether the media query matches the current state. It is true if the query matches, and false otherwise.

## Hook

```ts
import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    // Set the initial state
    setMatches(mediaQueryList.matches);

    // Listen for changes
    mediaQueryList.addEventListener('change', documentChangeHandler);

    // Cleanup listener on unmount
    return () => {
      mediaQueryList.removeEventListener('change', documentChangeHandler);
    };
  }, [query]);

  return matches;
}
```
