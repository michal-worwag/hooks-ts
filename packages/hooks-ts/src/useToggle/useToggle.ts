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
