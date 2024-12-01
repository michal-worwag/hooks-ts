import { afterEach, beforeEach, describe, expect, it, vitest } from 'vitest';
import { localStorageMock } from '../../test/mocks';
import { useLocalStorage } from './useLocalStorage';
import { renderHook } from '@testing-library/react';

describe('useLocalStorage', () => {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });

  beforeEach(() => {
    localStorageMock.clear();
  });

  afterEach(() => {
    vitest.clearAllMocks();
  });

  it('should set and get value from localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'value'));
    expect(result.current[0]).toBe('value');
  });

  it('should set value as array', () => {
    const { result } = renderHook(() => useLocalStorage('array', [1, 2]));

    expect(result.current[0]).toEqual([1, 2]);
  });

  // TODO: Add more tests
});
