import { useEffect, useState } from 'react';

const isServer = typeof window === 'undefined';

/**
 * Custom hook for detecting network status
 * @returns boolean - true if online, false if offline
 */
export function useNetworkStatus(): boolean {
  const [isOnline, setIsOnline] = useState<boolean>(
    isServer ? true : navigator.onLine,
  );

  useEffect(() => {
    if (isServer) return;

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
