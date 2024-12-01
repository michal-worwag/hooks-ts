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
