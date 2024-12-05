# useSlugify

## Usage

```ts
import { useSlugify } from 'hooks-ts';
import { useState } from 'react';

export default function Component() {
const [value, setValue] = useState<string>('')
  const slug = useSlugify(value ?? '');

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="text"
        value={slug}
      />
    </div>
  )
}
```

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
