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
