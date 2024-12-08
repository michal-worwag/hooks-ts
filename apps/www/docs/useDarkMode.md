# useDarkMode

The useDarkMode hook is a custom React hook designed to manage a "dark mode" setting in an application, incorporating persistent storage and DOM updates. This version leverages the useLocalStorage hook for streamlined local storage management.

## Usage

```tsx
import { useDarkMode } from 'hooks-ts';

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div>
      <h1>{isDarkMode ? 'Dark Mode Enabled' : 'Light Mode Enabled'}</h1>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}
```

### Returns

`isDarkMode: boolean` - A boolean value indicating whether dark mode is currently enabled (true) or not (false).

`toggleDarkMode: () => void` - A function to toggle the dark mode state between light and dark.

## Hook

```ts
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'hooks-ts';

export function useDarkMode(): [boolean, () => void] {
  // Checking user preferences from the system
  const getInitialMode = (): boolean => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode); // Return of stored value
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches; // Default mode
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialMode);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [darkMode, setDarkMode] = useLocalStorage<boolean>('darkMode', false);

  // Switching mode
  const toggleDarkMode = (): void => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Saving preferences in localStorage
    setDarkMode(isDarkMode);

    // Adding class to the body
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode, setValue]);

  return [isDarkMode, toggleDarkMode];
}
```
