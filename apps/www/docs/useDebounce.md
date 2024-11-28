# useDebounce

```ts
import { useState } from 'react';
import { useDebounce } from 'hooks-ts';

export default function App() {
  const [value, setValue] = useState<string>('');

  const debounced = useDebounce({ value, delay: 500 });

  return (
    <div>
      <p>Debounced value: {debounced ? debounced : 'Init'}!</p>
      <input type='text' onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
```
