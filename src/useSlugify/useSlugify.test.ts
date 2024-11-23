import { describe, expect, it } from 'vitest';

import { useSlugify } from './useSlugify';

describe('useSlugify', () => {
  it('should return a slugified string without special characters', () => {
    expect(useSlugify('HelLo World !^&( ^^%  $$')).toBe('hello-world');
  });
});
