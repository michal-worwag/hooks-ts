# useNetworkStatus

## Usage

```ts
import { useNetworkStatus } from 'hooks-ts';

export default function App() {
  const isOnline = useNetworkStatus();

  return (
    <div>
      <p>isOnline: {isOnline ? 'Yes' : 'No'}</p>
    </div>
  );
}
```
