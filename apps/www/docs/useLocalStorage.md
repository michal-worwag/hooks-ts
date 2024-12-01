# useLocalStorage

## Usage

```ts
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'hooks-ts';

export default function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useLocalStorage<number>('count', 0);

  useEffect(() => {
    setValue(count);
  }, [count, setValue]);
  return (
    <div>
      <p>Count: {value}</p>
      <button
        onClick={() => {
          setCount(() => count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(() => count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
```
