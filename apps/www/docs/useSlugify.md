# useSlugify

The `useSlugify` hook converts a given string into a URL-friendly slug. It transforms the string to lowercase, removes non-alphanumeric characters, replaces spaces with hyphens, and trims excess hyphens from the beginning and end.

## Usage

```tsx
import { useState } from 'react';
import { useSlugify } from 'hooks-ts';

export default function UseSlugifyExample() {
  const [value, setValue] = useState<string>('');
  const slug = useSlugify(value ?? '');

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <input type="text" value={slug} />
    </div>
  );
}
```

### Returns

`slug: string` - The slugified version of the input string, which is a lowercase, hyphen-separated, and URL-safe string.

## Hook

```ts
export function useSlugify(str: string): string {
  const slug = str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');

  return slug;
}
```
