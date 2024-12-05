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

## Hook

```ts
import { useEffect, useState } from 'react';

const isServer = typeof window !== 'undefined';

export function useNetworkStatus(): boolean {
  const [isOnline, setIsOnline] = useState(
    isServer ? true : window.navigator.onLine,
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
```
