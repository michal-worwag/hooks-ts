export type HookMeta = {
  name: string;
  url: string;
  description: string;
};

export const hooks: HookMeta[] = [
  {
    name: 'useBoolean',
    url: '/docs/useBoolean',
    description: 'Manage boolean state with handy helpers.',
  },
  {
    name: 'useCopyToClipboard',
    url: '/docs/useCopyToClipboard',
    description: 'Copy text to the clipboard with feedback.',
  },
  {
    name: 'useCountdown',
    url: '/docs/useCountdown',
    description: 'Run a countdown timer with start and reset.',
  },
  {
    name: 'useCounter',
    url: '/docs/useCounter',
    description: 'Increment, decrement, and reset a counter.',
  },
  {
    name: 'useDarkMode',
    url: '/docs/useDarkMode',
    description: 'Toggle and persist light/dark preference.',
  },
  {
    name: 'useDebounce',
    url: '/docs/useDebounce',
    description: 'Debounce a rapidly changing value.',
  },
  {
    name: 'useHover',
    url: '/docs/useHover',
    description: 'Track whether an element is hovered.',
  },
  {
    name: 'useIsomorphicLayoutEffect',
    url: '/docs/useIsomorphicLayoutEffect',
    description: 'SSR-safe layout effect alias.',
  },
  {
    name: 'useLocalStorage',
    url: '/docs/useLocalStorage',
    description: 'Persist state in localStorage.',
  },
  {
    name: 'useMediaQuery',
    url: '/docs/useMediaQuery',
    description: 'React to CSS media query matches.',
  },
  {
    name: 'useNetworkStatus',
    url: '/docs/useNetworkStatus',
    description: 'Know when the browser is online.',
  },
  {
    name: 'useOnScreen',
    url: '/docs/useOnScreen',
    description: 'Detect when an element enters the viewport.',
  },
  {
    name: 'usePrevious',
    url: '/docs/usePrevious',
    description: 'Keep the previous value of a variable.',
  },
  {
    name: 'useSessionStorage',
    url: '/docs/useSessionStorage',
    description: 'Persist state in sessionStorage.',
  },
  {
    name: 'useSlugify',
    url: '/docs/useSlugify',
    description: 'Turn strings into URL-friendly slugs.',
  },
  {
    name: 'useThrottle',
    url: '/docs/useThrottle',
    description: 'Throttle updates to a given interval.',
  },
  {
    name: 'useTimeout',
    url: '/docs/useTimeout',
    description: 'Declarative wrapper around setTimeout.',
  },
  {
    name: 'useToggle',
    url: '/docs/useToggle',
    description: 'Toggle between two values with ease.',
  },
];
