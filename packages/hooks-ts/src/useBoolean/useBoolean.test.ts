import { renderHook, act } from '@testing-library/react';
import { useBoolean } from './useBoolean';
import { describe, expect, it } from 'vitest';

describe('useBoolean', () => {
  it('should initialize with the given initial value', () => {
    const { result } = renderHook(() => useBoolean(true));
    expect(result.current.value).toBe(true);

    const { result: resultFalse } = renderHook(() => useBoolean(false));
    expect(resultFalse.current.value).toBe(false);
  });

  it('should throw an error if initial value is not a boolean', () => {
    // @ts-expect-error Testing invalid input
    expect(() => renderHook(() => useBoolean('invalid'))).toThrowError(
      'useBoolean: Initial value must be a boolean',
    );
  });

  it('should toggle the state', () => {
    const { result } = renderHook(() => useBoolean(false));
    const { toggle } = result.current;

    act(() => toggle());
    expect(result.current.value).toBe(true);

    act(() => toggle());
    expect(result.current.value).toBe(false);
  });

  it('should set the state to true', () => {
    const { result } = renderHook(() => useBoolean(false));
    const { setTrue } = result.current;

    act(() => setTrue());
    expect(result.current.value).toBe(true);
  });

  it('should set the state to false', () => {
    const { result } = renderHook(() => useBoolean(true));
    const { setFalse } = result.current;

    act(() => setFalse());
    expect(result.current.value).toBe(false);
  });

  it('should allow setting the value directly', () => {
    const { result } = renderHook(() => useBoolean(false));
    const { setValue } = result.current;

    act(() => setValue(true));
    expect(result.current.value).toBe(true);

    act(() => setValue(false));
    expect(result.current.value).toBe(false);
  });
});
