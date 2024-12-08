import { renderHook, act, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useHover } from './useHover';

describe('useHover Hook', () => {
  const element = {
    current: document.createElement('div'),
  };

  it('should return ref and initial hover state as false', () => {
    const { result } = renderHook(() => useHover(element));

    const isHovered = result.current;
    expect(isHovered).toBe(false); // Initial hover state is false
  });

  it('should set hover state to true on mouseenter', () => {
    const { result } = renderHook(() => useHover(element));

    expect(result.current).toBe(false);

    act(() => void fireEvent.mouseEnter(element.current));
    expect(result.current).toBe(true);
  });

  it('should set hover state back to false on mouseleave', () => {
    const { result } = renderHook(() => useHover(element));

    expect(result.current).toBe(false);

    act(() => void fireEvent.mouseEnter(element.current));
    expect(result.current).toBe(true);

    act(() => void fireEvent.mouseLeave(element.current));
    expect(result.current).toBe(false);
  });
});
