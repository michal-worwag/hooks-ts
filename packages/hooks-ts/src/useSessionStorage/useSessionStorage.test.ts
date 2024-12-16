import { renderHook, act } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { useSessionStorage } from './useSessionStorage';

describe('useSessionStorage', () => {
  const key = 'testKey';

  beforeEach(() => {
    sessionStorage.clear(); // Clear sessionStorage before each test
  });

  it('should initialize with the initial value if no value is in sessionStorage', () => {
    const { result } = renderHook(() => useSessionStorage(key, 'defaultValue'));
    expect(result.current[0]).toBe('defaultValue');
  });

  it('should initialize with the value from sessionStorage if it exists', () => {
    sessionStorage.setItem(key, JSON.stringify('storedValue'));
    const { result } = renderHook(() => useSessionStorage(key, 'defaultValue'));
    expect(result.current[0]).toBe('storedValue');
  });

  it('should update the value in state and sessionStorage when setValue is called', () => {
    const { result } = renderHook(() => useSessionStorage(key, 'defaultValue'));

    act(() => {
      result.current[1]('newValue');
    });

    expect(result.current[0]).toBe('newValue');
    expect(sessionStorage.getItem(key)).toBe(JSON.stringify('newValue'));
  });

  it('should remove the value from state and sessionStorage when removeValue is called', () => {
    sessionStorage.setItem(key, JSON.stringify('storedValue'));
    const { result } = renderHook(() => useSessionStorage(key, 'defaultValue'));

    act(() => {
      result.current[2](); // Call removeValue
    });

    expect(result.current[0]).toBe('defaultValue');
    expect(sessionStorage.getItem(key)).toBeNull();
  });

  it('should handle multiple updates to sessionStorage correctly', () => {
    const { result } = renderHook(() => useSessionStorage(key, 0));

    act(() => {
      result.current[1](10);
    });

    expect(result.current[0]).toBe(10);
    expect(sessionStorage.getItem(key)).toBe(JSON.stringify(10));

    act(() => {
      result.current[1](20);
    });

    expect(result.current[0]).toBe(20);
    expect(sessionStorage.getItem(key)).toBe(JSON.stringify(20));
  });

  it('should gracefully handle JSON parse errors', () => {
    sessionStorage.setItem(key, 'invalid JSON');
    const { result } = renderHook(() => useSessionStorage(key, 'defaultValue'));

    expect(result.current[0]).toBe('defaultValue'); // Fallback to initialValue
  });

  it('should gracefully handle sessionStorage removal errors', () => {
    const { result } = renderHook(() => useSessionStorage(key, 'defaultValue'));
    vitest.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {
      throw new Error('Remove error');
    });

    act(() => {
      result.current[2](); // Call removeValue
    });

    expect(result.current[0]).toBe('defaultValue'); // State should reset to initialValue
  });
});
