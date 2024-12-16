# useSessionStorage

The `useSessionStorage` hook provides a convenient way to manage state that persists in `sessionStorage`. This hook synchronizes a React state variable with a `sessionStorage` key, allowing values to persist across page reloads and ensuring compatibility with the browser's session storage API.

## Usage

```tsx
import { useState } from 'react';
import { useSessionStorage } from 'hooks-ts';

export default function UseSessionStorageExample() {
  const [newName, setNewName] = useState('');
  const [name, setName, removeName] = useSessionStorage<string>(
    'name',
    'Guest',
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome, {name}!</h1>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={() => setName(newName)}>Set name</button>
      <button onClick={() => setName('Guest')}>Reset Name</button>
      <button onClick={removeName}>Remove Name</button>
    </div>
  );
}
```

### Returns

`storedValue: T` - The current value stored in sessionStorage for the given key. If no value is found, it defaults to the initialValue.

`setValue: (value: T) => void` - A function to update the state and store the new value in sessionStorage.

`removeValue: () => void` - A function to remove the key-value pair from sessionStorage and reset the state to the initialValue.

## Hook

```ts
import { useState, useEffect } from 'react';

type UseSessionStorageReturn<T> = [T, (value: T) => void, () => void];

export function useSessionStorage<T>(
  key: string,
  initialValue: T,
): UseSessionStorageReturn<T> {
  // State to store the value
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from sessionStorage', error);
      return initialValue;
    }
  });

  // Function to update the value in state and sessionStorage
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing to sessionStorage', error);
    }
  };

  // Function to remove the value from state and sessionStorage
  const removeValue = () => {
    try {
      setStoredValue(initialValue);
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from sessionStorage', error);
    }
  };

  useEffect(() => {
    const item = sessionStorage.getItem(key);
    if (item === null) {
      sessionStorage.setItem(key, JSON.stringify(initialValue));
    }
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
}
```
