# useCopyToClipboard

`useCopyToClipboard` is a React hook that provides a simple way to copy text to the clipboard. It maintains the state of the last copied text and allows invoking the copy operation asynchronously.

## Usage

```tsx
import { useCopyToClipboard } from 'hooks-ts';

function CopyToClipboardExample() {
  const [copiedText, copyToClipboard] = useCopyToClipboard();

  const handleCopy = async () => {
    const text = 'Hello, Clipboard!';
    await copyToClipboard(text);
  };

  return (
    <div>
      <button onClick={handleCopy}>Copy Text</button>
      {copiedText && <p>Copied text: {copiedText}</p>}
      {!copiedText && <p>No text copied yet or failed to copy.</p>}
    </div>
  );
}
```

### Returns

`copiedText: string | null`: The last copied text as a string, or null if no text has been copied or the operation failed.

`copy: (text: string) => Promise<void>`: An asynchronous function that accepts a string and attempts to copy it to the clipboard. It updates the copiedText state with the copied value or resets it to null in case of failure.

## Hook

```ts
import { useState } from 'react';

type CopiedValueType = string | null;

export const useCopyToClipboard = (): [
  CopiedValueType,
  (text: string) => Promise<void>,
] => {
  const [copiedText, setCopiedText] = useState<CopiedValueType>(null);

  const copy = async (text: string): Promise<void> => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
    } catch (error) {
      setCopiedText(null);
    }
  };

  return [copiedText, copy];
};
```
