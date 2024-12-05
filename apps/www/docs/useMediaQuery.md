# useMediaQuery

## Usage

```ts
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
