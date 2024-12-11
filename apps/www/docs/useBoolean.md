# useBoolean

The `useBoolean` hook manages boolean state in React applications, providing utility methods to toggle, set true, set false, and directly update the state.

## Usage

```tsx
import { useBoolean } from 'hooks-ts';

export function BooleanExample() {
  const { value, setValue, toggle, setTrue, setFalse } = useBoolean(false);

  return (
    <div>
      <p>Current Value: {value ? 'True' : 'False'}</p>

      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>Set True</button>
      <button onClick={setFalse}>Set False</button>

      <div style={{ marginTop: '10px' }}>
        <button onClick={() => setValue(true)}>Set to True (Direct)</button>
        <button onClick={() => setValue(false)}>Set to False (Direct)</button>
      </div>
    </div>
  );
}
```

### Returns

`value: boolean` - The current boolean state.

`setValue: Dispatch<SetStateAction<boolean>>` - A function to directly update the state to a specific boolean value.

`toggle: () => void` - A function to toggle the state between true and false.

`setTrue: () => void` - A function to set the state to true.

`setFalse: () => void` - A function to set the state to false.

## Hook

```ts
import {
  useState,
  useCallback,
  type Dispatch,
  type SetStateAction,
} from 'react';

type UseBooleanReturnType = {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
};

export function useBoolean(
  initialValue: boolean = false,
): UseBooleanReturnType {
  if (typeof initialValue !== 'boolean') {
    throw new Error('useBoolean: Initial value must be a boolean');
  }
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { value, setValue, toggle, setTrue, setFalse };
}
```
