# useToggle

The `useToggle` hook manages a boolean state, allowing it to toggle between `true` and `false` or be explicitly set.

## Usage

```tsx
import React from 'react';
import { useToggle } from 'hooks-ts';

export function ToggleExample() {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <div>
      <p>The toggle is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => toggleIsOn()}>Toggle</button>
      <button onClick={() => toggleIsOn(true)}>Set ON</button>
      <button onClick={() => toggleIsOn(false)}>Set OFF</button>
    </div>
  );
}
```

### Returns

`state: boolean` - The current state of the toggle.

`toggle: (value?: boolean) => void` - A function to toggle the state or set it explicitly:

- If no argument is provided, it toggles the state.
- If a boolean is passed, it sets the state to that value.

## Hook

```ts
import { useState, useCallback } from 'react';

export function useToggle(
  initialValue: boolean = false,
): [boolean, (value?: boolean) => void] {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback((value?: boolean) => {
    setState((current) => (typeof value === 'boolean' ? value : !current));
  }, []);

  return [state, toggle];
}
```
