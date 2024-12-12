// useCopyToClipboard.test.ts
import { renderHook, act } from '@testing-library/react';
import { useCopyToClipboard } from './useCopyToClipboard';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

describe('useCopyToClipboard', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vitest.fn(),
      },
    });
  });

  it('should copy text to the clipboard and update state', async () => {
    const { result } = renderHook(() => useCopyToClipboard());
    const [, copy] = result.current;

    const text = 'Test copy text';

    await act(async () => {
      await copy(text);
    });

    expect(result.current[0]).toBe(text);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(text);
  });

  it('should set state to null if clipboard write fails', async () => {
    const error = new Error('Clipboard access denied');
    vitest.spyOn(navigator.clipboard, 'writeText').mockRejectedValue(error);

    const { result } = renderHook(() => useCopyToClipboard());
    const [, copy] = result.current;

    const text = 'Test failure';

    await act(async () => {
      await copy(text);
    });

    expect(result.current[0]).toBeNull();
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(text);
  });
});
