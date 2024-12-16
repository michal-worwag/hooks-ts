# useIsomorphicLayoutEffect

The `useIsomorphicLayoutEffect` hook is a utility that chooses between `useLayoutEffect` and `useEffect` depending on the environment.

- In browser environments: It uses `useLayoutEffect` for operations that need to occur synchronously after DOM mutations.
- In non-browser environments (e.g., server-side rendering): It uses `useEffect` to avoid warnings about the unsupported use of `useLayoutEffect`.

This hook ensures compatibility across both client-side and server-side rendering contexts.

## Usage

```tsx
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect';

export default function UseIsomorphicLayoutEffectExample() {
  useIsomorphicLayoutEffect(() => {
    console.log('useIsomorphicLayoutEffect');
  }, []);
  return <p>Hello, useIsomorphicLayoutEffect</p>;
}
```

## Hook

```ts
import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
```
