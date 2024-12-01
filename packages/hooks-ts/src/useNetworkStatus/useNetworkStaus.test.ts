import { describe, expect, it } from 'vitest';
import { renderHook } from '@testing-library/react';

import { useNetworkStatus } from './useNetworkStatus';

describe('useNetworkStatus', () => {
  it('should return true when online', () => {
    const { result } = renderHook(() => useNetworkStatus());

    expect(result.current).toBe(true);
  });
});
