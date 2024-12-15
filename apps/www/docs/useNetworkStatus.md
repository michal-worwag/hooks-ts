# useNetworkStatus

The `useNetworkStatus` hook monitors the online/offline status of the user's device. It returns a boolean indicating whether the device is currently online (`true`) or offline (`false`), and automatically updates as the network status changes.

## Usage

```tsx
import { useNetworkStatus } from 'hooks-ts';

export default function UseNetworkStatusExample() {
  const isOnline = useNetworkStatus();

  return (
    <div>
      <p>isOnline: {isOnline ? 'Yes' : 'No'}</p>
    </div>
  );
}
```

### Returns

`isOnline: boolean` - A boolean value that reflects the current network status:

- `true` if the device is online.
- `false` if the device is offline.

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
