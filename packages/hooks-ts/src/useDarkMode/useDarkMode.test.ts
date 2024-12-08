import { renderHook, act } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { useDarkMode } from './useDarkMode';

// Mock localStorage
beforeEach(() => {
  localStorage.clear();
});

describe('useDarkMode', () => {
  it('should initialize with the system preference if no saved preference exists', () => {
    // Mock the system's prefers-color-scheme
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
      addListener: vi.fn(),
      removeListener: vi.fn(),
    }));

    const { result } = renderHook(() => useDarkMode());
    const [isDarkMode] = result.current;

    expect(isDarkMode).toBe(true); // Assumes system preference is dark
  });

  it('should initialize with the saved preference in localStorage', () => {
    localStorage.setItem('darkMode', 'false');

    const { result } = renderHook(() => useDarkMode());
    const [isDarkMode] = result.current;

    expect(isDarkMode).toBe(false); // Saved preference in localStorage is respected
  });

  it('should toggle dark mode state', () => {
    // Mock the system's prefers-color-scheme
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: light)',
      addListener: vi.fn(),
      removeListener: vi.fn(),
    }));
    const { result } = renderHook(() => useDarkMode());
    const [, toggleDarkMode] = result.current;

    act(() => {
      toggleDarkMode();
    });

    const [isDarkMode] = result.current;
    expect(isDarkMode).toBe(true);
  });

  it('should save dark mode preference in localStorage on toggle', () => {
    const { result } = renderHook(() => useDarkMode());
    const [, toggleDarkMode] = result.current;

    act(() => {
      toggleDarkMode();
    });

    expect(localStorage.getItem('darkMode')).toBe('true');

    act(() => {
      toggleDarkMode();
    });

    expect(localStorage.getItem('darkMode')).toBe('false');
  });

  it('should add and remove "dark-mode" class from the body on toggle', () => {
    const { result } = renderHook(() => useDarkMode());
    const [, toggleDarkMode] = result.current;

    expect(document.body.classList.contains('dark-mode')).toBe(false);

    act(() => {
      toggleDarkMode();
    });

    expect(document.body.classList.contains('dark-mode')).toBe(true);

    act(() => {
      toggleDarkMode();
    });

    expect(document.body.classList.contains('dark-mode')).toBe(false);
  });
});
