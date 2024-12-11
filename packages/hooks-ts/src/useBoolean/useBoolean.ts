import {
  useState,
  useCallback,
  type Dispatch,
  type SetStateAction,
} from 'react';

type UseBooleanReturnType = {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
};

export function useBoolean(
  initialValue: boolean = false,
): UseBooleanReturnType {
  if (typeof initialValue !== 'boolean') {
    throw new Error('useBoolean: Initial value must be a boolean');
  }
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { value, setValue, toggle, setTrue, setFalse };
}
